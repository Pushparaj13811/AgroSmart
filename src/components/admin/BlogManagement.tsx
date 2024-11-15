import React, { useEffect, useState } from 'react';
import { PenSquare, Trash2, Plus, ChevronLeft } from 'lucide-react';
import { format } from 'date-fns';
import CreateBlog from '../../components/admin/CreateBlog';
import Button from '../ui/Button';
import { Card, CardContent } from '../ui/Card';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "../ui/alert";
import { blogPosts } from "../../constants/Blog";
import PageTransition from '../ui/PageTransition';

interface Blog {
    id: string;
    title: string;
    content: string;
    author: string;
    createdAt: Date;
    thumbnail: string;
}

const BlogManagement: React.FC = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [showCreateBlog, setShowCreateBlog] = useState(false);
    const [showUpdateBlog, setShowUpdateBlog] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    useEffect(() => {
        const transformedBlogs = blogPosts.map(post => ({
            ...post,
            id: post.id,
            content: post.excerpt || '',
            createdAt: new Date(post.date),
            thumbnail: post.image || '/api/placeholder/400/250'
        }));
        setBlogs(transformedBlogs);
    }, []);

    const handleDelete = (blogId: string) => {
        setBlogs(blogs.filter(blog => blog.id !== blogId));
        setShowDeleteDialog(false);
    };

    const handleUpdate = (blog: Blog) => {
        setSelectedBlog(blog);
        setShowUpdateBlog(true);
    };

    return (
        <PageTransition>
            <div className="p-4 sm:p-6 bg-[#f0fdf4] min-h-screen">
                {!showCreateBlog && !showUpdateBlog ? (
                    <>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6">
                            <h1 className="text-xl sm:text-2xl font-bold text-[#17a34a]">Blog Management</h1>
                            <Button
                                onClick={() => setShowCreateBlog(true)}
                                className="w-full sm:w-auto bg-[#17a34a] hover:bg-[#15803d] text-white"
                            >
                                <Plus className="mr-2 h-4 w-4" /> Create New Blog
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 gap-6 w-full">
                            {blogs.map((blog) => (
                                <Card key={blog.id} className="overflow-hidden border-[#86efac] hover:shadow-lg transition-shadow w-full">
                                    <CardContent className="p-0">
                                        {/* Flex container with responsive direction */}
                                        <div className="flex flex-col lg:flex-row w-full">
                                            {/* Image container */}
                                            <div className="w-full lg:w-48 h-48 relative">
                                                <img
                                                    src={blog.thumbnail}
                                                    alt={blog.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            {/* Content container */}
                                            <div className="flex-grow p-4 flex flex-col">
                                                <div className="flex-grow">
                                                    <h3 className="text-lg font-semibold text-[#17a34a] mb-2 line-clamp-2">
                                                        {blog.title}
                                                    </h3>
                                                    <p className="text-[#17a34a] text-sm mb-2 line-clamp-3">
                                                        {blog.content}
                                                    </p>
                                                    <div className="flex flex-wrap items-center gap-2 text-sm text-[#17a34a] mb-2">
                                                        <span>By {blog.author}</span>
                                                        <span className="hidden sm:inline">•</span>
                                                        <span>{format(blog.createdAt, 'MMM dd, yyyy')}</span>
                                                    </div>
                                                </div>

                                                {/* Actions container */}
                                                <div className="flex justify-end gap-2 mt-4">
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className="text-[#17a34a] border-[#86efac] hover:bg-[#f0fdf4]"
                                                        onClick={() => handleUpdate(blog)}
                                                    >
                                                        <PenSquare className="h-4 w-4 sm:mr-2" />
                                                        <span className="hidden sm:inline">Edit</span>
                                                    </Button>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className="text-red-600 border-red-200 hover:bg-red-50"
                                                        onClick={() => {
                                                            setSelectedBlog(blog);
                                                            setShowDeleteDialog(true);
                                                        }}
                                                    >
                                                        <Trash2 className="h-4 w-4 sm:mr-2" />
                                                        <span className="hidden sm:inline">Delete</span>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </>
                ) : (
                    <div>
                        <Button
                            variant="ghost"
                            onClick={() => {
                                setShowCreateBlog(false);
                                setShowUpdateBlog(false);
                                setSelectedBlog(null);
                            }}
                            className="mb-6 text-[#17a34a] hover:text-[#15803d]"
                        >
                            <ChevronLeft className="mr-2 h-4 w-4" />
                            Back to Blog List
                        </Button>
                        <CreateBlog
                            onSave={(blog: Partial<Blog>) => {
                                if (selectedBlog) {
                                    setBlogs(blogs.map(b => b.id === selectedBlog.id ? { ...selectedBlog, ...blog } : b));
                                } else {
                                    const newBlog: Blog = {
                                        id: Date.now().toString(),
                                        title: blog.title || 'Untitled Blog',
                                        content: blog.content || '',
                                        author: 'Default Author',
                                        createdAt: new Date(),
                                        thumbnail: '/api/placeholder/400/250',
                                    };
                                    setBlogs([...blogs, newBlog]);
                                }
                                setShowCreateBlog(false);
                                setShowUpdateBlog(false);
                                setSelectedBlog(null);
                            }}
                        />
                    </div>
                )}

                <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
                    <AlertDialogContent className="bg-white m-4">
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure you want to delete this blog?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete the blog post.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel className="text-[#17a34a] border-[#86efac]">Cancel</AlertDialogCancel>
                            <AlertDialogAction
                                className="bg-red-600 hover:bg-red-700"
                                onClick={() => selectedBlog && handleDelete(selectedBlog.id)}
                            >
                                Delete
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </PageTransition>
    );
};

export default BlogManagement;