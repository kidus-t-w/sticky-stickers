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
  const [tag, setTag] = useState<string>(""); // For entering a new tag
  const [tags, setTags] = useState<string[]>([]); // List of all tags
  const numOrders = 1;
  const [file, setFile] = React.useState<File>();

  const { edgestore } = useEdgeStore();
  const [progress, setProgress] = useState<number>(0);

  const router = useRouter();

  // Function to handle tag addition
  const handleTagAddition = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tag.trim() !== "") {
      e.preventDefault();
      if (!tags.includes(tag.trim())) {
        setTags([...tags, tag.trim()]); // Add tag to the list
      }
      setTag(""); // Clear the input
    }
  };

  // Function to remove a tag
  const handleTagRemove = (tagToRemove: string) => {
    setTags(tags.filter((t) => t !== tagToRemove)); // Remove tag
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

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
      const res = await edgestore.publicFiles.upload({
        file,
        onProgressChange: (progress) => setProgress(progress),
      });

      if (res && res.url) {
        const imageUrl = res.url;

        const response = await fetch("/api/products", {
          method: "POST",
          body: JSON.stringify({
            productName,
            description,
            productStatus,
            category,
            numOrders,
            imageUrl,
            tags, // Send the tags array
          }),
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        console.log("Product Created Successfully:", data);

        setProductName("");
        setDescription("");
        setProductStatus("Published");
        setCatagory("Animation");
        setFile(undefined);
        setProgress(0);
        setTags([]); // Reset tags
        setTag("");

        router.push("/dashboard/products");
      } else {
        console.error("Failed to retrieve the public URL from the response");
      }
    } catch (error: any) {
      console.error("Error during file upload or product creation:", error.message);
    }
  };

  return (
    <form
      className="bg-white p-8 rounded-lg shadow-lg w-[100%] mx-auto"
      onSubmit={handleSubmit}
    >
      <Link href="/dashboard/products">
        <FaArrowLeft className="mb-4 text-2xl" />
      </Link>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-6">Create Product</h1>

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 h-12 rounded-xl focus:outline-none focus:shadow-outline"
        >
          Create Product
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Product Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter product name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Product Status
            </label>
            <select
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={productStatus}
              onChange={(e) => setProductStatus(e.target.value)}
            >
              <option>Published</option>
              <option>Unpublished</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Tags
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter a tag and press Enter"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              onKeyDown={handleTagAddition}
            />

            {/* Display added tags */}
            <div className="mt-2 flex flex-wrap">
              {tags.map((t) => (
                <span
                  key={t}
                  className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full mr-2 mb-2 cursor-pointer"
                  onClick={() => handleTagRemove(t)}
                >
                  {t} &times;
                </span>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Category
            </label>
            <select
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter product description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="md:col-span-2 mb-4">
          <h3 className="font-bold mb-2 ml-1 text-sm">Media</h3>
          <div className="w-full flex justify-center">
            <SingleImageDropzone
              className="bg-gray-200"
              width={250}
              height={200}
              value={file}
              onChange={(file) => setFile(file)}
            />
          </div>
          <div className="h-[6px] w-full border rounded overflow-hidden">
            <div
              className="h-full bg-red-500 transition-all duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProductForm;
