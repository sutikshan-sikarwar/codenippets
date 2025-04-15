import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";

const SnippetDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = parseInt((await params).id);

  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });

  if (!snippet) return <h1>Snippet not found</h1>;

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl">{snippet.title}</h1>
        <div className="flex gap-2 items-center">
          <Link href={`/snippet/${snippet.id}/edit`}><Button>Edit</Button></Link>
          <Button variant={"destructive"}>Delete</Button>
        </div>
      </div>
      <pre className="p-4 m-4 bg-gray-200 rounded-3xl border-gray-500 border-2">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
};

export default SnippetDetailsPage;
