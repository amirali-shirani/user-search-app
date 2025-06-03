'use client';
import Image from "next/image";
import {Mail, MapPin} from "lucide-react";

export default function UserCard({user}) {
    return (
        <div
            className="relative group bg-white dark:bg-gray-900 shadow-md dark:shadow-black/30 rounded-2xl
            p-5 flex items-center gap-5 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
            <div
                className="absolute inset-0 bg-gradient-to-tr from-purple-100 via-transparent to-blue-100
                dark:from-purple-900 dark:to-blue-900 opacity-0 group-hover:opacity-20 transition-opacity
                duration-500 pointer-events-none z-0"/>
            <div className="relative z-10 shrink-0 transition-transform duration-300 group-hover:scale-110">
                <Image
                    src={user.picture.medium}
                    width={64}
                    height={64}
                    alt={`${user.name.first} ${user.name.last}`}
                    className="rounded-full w-16 h-16 object-cover border-2 border-purple-400
                     dark:border-purple-700 shadow-sm"
                />
            </div>
            <div className="flex flex-col z-10">
                <h2 className="text-lg font-extrabold text-gray-800 dark:text-gray-100 mb-1">
                    {user.name.first} {user.name.last}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1">
                    <Mail className="w-4 h-4 text-purple-500 dark:text-purple-400"/>
                    <span className="truncate">{user.email}</span>
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-1">
                    <MapPin className="w-4 h-4 text-blue-500 dark:text-blue-400"/>
                    <span>{user.location.city}, {user.location.country}</span>
                </p>
            </div>
        </div>
    );
}
