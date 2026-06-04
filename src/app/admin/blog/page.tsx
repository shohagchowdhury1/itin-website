import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Plus, Edit, Trash2 } from "lucide-react";
import { getAllBlogPosts } from "@/data/blog-posts";

export const metadata = {
  title: "Blog Management — itin.so Admin",
};

export default function AdminBlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Blog Management</h1>
          <p className="text-muted-foreground">Create and manage blog posts.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search posts..." className="pl-10" />
          </div>
          <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-teal-dark">
            <Plus className="h-4 w-4" />
            New Post
          </button>
        </div>
      </div>

      <Card className="border-border/50 bg-card/50">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Title</th>
                  <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Category</th>
                  <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Author</th>
                  <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Date</th>
                  <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.slug} className="border-b border-border/50 transition-colors hover:bg-muted/30">
                    <td className="px-6 py-4 text-sm text-foreground">
                      <Link href={`/blog/${post.slug}/`} className="hover:text-primary">
                        {post.title}
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary">{post.category}</Badge>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{post.author}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {new Date(post.datePublished).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="rounded-lg p-2 text-muted-foreground hover:bg-destructive/10 hover:text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
