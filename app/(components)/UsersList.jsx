'use client';
import { useUsers } from "@/hooks/useUsers";
import UserCard from "@/app/(components)/UserCard";

export default function UsersList() {
    const { data: users, isLoading, isError } = useUsers();

    if (isLoading) return <p className="text-center text-gray-600 dark:text-gray-300">در حال بارگذاری کاربران...</p>;
    if (isError) return <p className="text-center text-red-500">خطا در دریافت اطلاعات</p>;

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-800 dark:text-white">
                لیست کاربران
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map((user, index) => (
                    <UserCard key={index} user={user} />
                ))}
            </div>
        </div>
    );
}
