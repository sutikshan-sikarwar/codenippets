import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { Snippet } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  const snippets = await prisma.snippet.findMany();

  return (
    <div>
    <h1 className="font-semibold text-4xl">Home</h1>
    <div className="flex items-center justify-between">
      <h1>Snippets</h1>
      <Link href={"/snippet/new"}><Button className="cursor-pointer">New</Button></Link>
    </div>
    {
      snippets.map((Snippet) => (
        <div key={Snippet.id} className="text-lg flex justify-between p-3 items-center shadow-lg hover:shadow-xl hover:h-16 bg-gray-200 rounded-2xl my-5">
        <h1>{Snippet.title}</h1>
        <Link href={`/snippet/${Snippet.id}`}><Button className="cursor-pointer hover:text-lg" variant={'link'}>View</Button></Link>
        </div>
      ))
    }
    </div>
  );
}
