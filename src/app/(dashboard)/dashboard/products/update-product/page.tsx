"use client";

import { SingleImageDropzone } from "@/components/SingleImageDropzone";
import { useEdgeStore } from "../../../../../../lib/edgestore";
import React, { useState, ChangeEvent, KeyboardEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

interface ProductFormProps {}

interface Tag {
  id: number;
  name: string;
}

const ProductForm: React.FC<ProductFormProps> = () => {
  const [productName, setProductName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [productStatus, setProductStatus] = useState<string>("Published");
  const [category, setCatagory] = useState<string>("Animation");
  const [tag, setTag] = useState<string>("");
  const numOrders = 1;
  
  // const [imageUrl, setImageUrl] = useState<string>();
  const [file, setFile] = React.useState<File>();

  const { edgestore } = useEdgeStore();
  const [progress, setProgress] = useState<number>(0);

  const router = useRouter();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    // Retrieve the JWT token from the cookie
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

    if (!token) {
      console.error("JWT token not found in cookies");
      return;
    }

    if (!file) {
      console.error("No file selected");
      return;
    }

    try {
      // Upload the image first
      const res = await edgestore.publicFiles.upload({
        file,
        onProgressChange: (progress) => {
          // Optionally handle the progress bar
          setProgress(progress);
        },
      });

      // Ensure the image URL is set before proceeding
      if (res && res.url) {
        // setImageUrl(res.url);
        console.log(res);
        console.log("Image URL:", res.url);

        // Now that the imageUrl is set, proceed to submit the product
        const imageUrl = res.url; // Store URL here to avoid race condition

        // Submit the form data with Authorization header
        const response = await fetch("/api/products", {
          method: "POST",
          body: JSON.stringify({
            productName,
            description,
            productStatus,
            category,
            numOrders,
            imageUrl,
            tag,
            
          }),
          headers: {
            Authorization: `Bearer ${token}`, // Set the token in Authorization header
            "Content-Type": "application/json", // Ensure correct content type
          },
        });

        const data = await response.json();
        console.log("Product Created Successfully:", data);

        // Reset the form after successful submission
        setProductName("");
        setDescription("");
        setProductStatus("Published");
        setCatagory("Animation");
        setFile(undefined);
        setProgress(0); // Reset progress bar
        setTag("");

        router.push("/dashboard/products");
      } else {
        console.error("Failed to retrieve the public URL from the response");
      }
    } catch (error: any) {
      console.error(
        "Error during file upload or product creation:",
        error.message
      );
    }
  };

  return (
    <form
      className="bg-white p-8 rounded-lg shadow-lg w-[100%] mx-auto "
      onSubmit={handleSubmit}
    >
      <Link href="/dashboard/products">
        <FaArrowLeft className="mb-4 text-2xl" />
      </Link>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-6">Update Product</h1>

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 h-12 rounded-xl focus:outline-none focus:shadow-outline"
        >
          Update Product
        </button>
      </div>

      {/* Main grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left column for product name and description */}
        <div className="space-y-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="productName"
            >
              Product Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="productName"
              type="text"
              placeholder="Enter product name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="status"
            >
              Product Status
            </label>
            <select
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="status"
              value={productStatus}
              onChange={(e) => setProductStatus(e.target.value)}
            >
              <option>Published</option>
              <option>Unpublished</option>
            </select>
          </div>
        </div>

        {/* Right column for product status and tags */}
        <div className="space-y-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Tag
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="tag"
              type="text"
              placeholder="Enter product tag"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="status"
            >
              Catagory
            </label>
            <select
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="category"
              value={category}
              onChange={(e) => setCatagory(e.target.value)}
            >
              <option>Animation</option>
              <option>Anime</option>
              <option>Ethiopia</option>
              <option>Music</option>
              <option>Movie</option>
              <option>Series</option>
              <option>Sport</option>
              <option>Work</option>
              <option>School</option>
              <option>Meme</option>
              <option>Korea</option>
            </select>
          </div>
        </div>

        <div className="md:col-span-2 mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Enter product description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Full-width media section */}

        <div className="md:col-span-2 mb-4">
          <h3 className="font-bold mb-2 ml-1 text-sm">Media</h3>
          <div className="w-full flex justify-center">
            <SingleImageDropzone
              className="bg-gray-200"
              width={250}
              height={200}
              value={file}
              onChange={(file) => {
                setFile(file);
              }}
            />
          </div>
          <div className="h-[6px] w- border rounded overflow-hidden">
            <div
              className="h-full bg-red-500 transition-all duration-150"
              style={{
                width: `${progress}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProductForm;
