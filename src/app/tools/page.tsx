"use client"

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { toolsData, ToolsDataType } from "@/lib/toolsData";
import { motion } from "framer-motion";
import { ChevronRight } from 'lucide-react';
import SearchBar from "@/components/SearchBar";

const Tools = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredToolsData = Object.entries(toolsData).reduce<ToolsDataType>((acc, [section, categories]) => {
    const filteredCategories = categories.map(category => ({
      ...category,
      tools: category.tools.filter(tool => 
        tool.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(category => category.tools.length > 0);

    if (filteredCategories.length > 0) {
      acc[section as keyof ToolsDataType] = filteredCategories;
    }
    return acc;
  }, {} as ToolsDataType);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-5xl font-bold text-center mb-12 dark:text-white">
        🛠 Devkins Tools
      </h1>
      <SearchBar onSearch={setSearchQuery} />
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {Object.entries(filteredToolsData).map(([section, categories]) => (
          <React.Fragment key={section}>
            {section !== "Developer Tools" && (
              <h2 className="text-3xl font-bold mb-6 dark:text-white col-span-full">{section}</h2>
            )}
            {categories.map((category) => (
              <motion.div key={category.category} variants={itemVariants}>
                <Card className="h-full dark:bg-zinc-800 dark:text-white bg-white text-black">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.tools.map((tool) => (
                        <li key={tool.name}>
                          <Link href={`/tools${tool.href}`}>
                            <div className="dark:hover:bg-zinc-700 hover:bg-zinc-100 flex items-center justify-between p-2 rounded-md transition-colors">
                              <span>{tool.name}</span>
                              <ChevronRight className="h-4 w-4" />
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default Tools;

