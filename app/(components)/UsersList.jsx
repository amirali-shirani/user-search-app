'use client';
import {useEffect, useMemo, useState} from "react";
import {useUsers} from "@/hooks/useUsers";
import UserCard from "@/app/(components)/UserCard";

export default function UsersList() {
    const {data: users, isLoading, isError} = useUsers();
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("");

    const countries = useMemo(() => {
        if (!users) return [];
        const uniqueCountries = [...new Set(users.map(user => user.location.country))];
        return uniqueCountries.sort();
    }, [users]);

    const filteredUsers = useMemo(() => {
        if (!users) return [];
        return users.filter(user => {
            const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
            const email = user.email.toLowerCase();
            const country = user.location.country;

            const matchesSearch = fullName.includes(searchTerm.toLowerCase()) || email.includes(searchTerm.toLowerCase());
            const matchesCountry = selectedCountry ? country === selectedCountry : true;
            return matchesSearch && matchesCountry;
        });
    }, [users, searchTerm, selectedCountry]);


    if (isLoading) return <p className="text-center">در حال بارگذاری کاربران...</p>;
    if (isError) return <p className="text-center text-red-500">خطا در دریافت اطلاعات</p>;
    return (<div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">لیست کاربران</h1>

            <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center items-center">
                <input
                    type="text"
                    placeholder="جستجو بر اساس نام یا ایمیل..."
                    className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-64 focus:outline-none
                    focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <select
                    className="border rounded-md px-4 py-2 w-full sm:w-48 focus:outline-none
                    focus:ring-2 focus:ring-blue-400 bg-gray-800 border-gray-600 text-gray-100"
                    value={selectedCountry}
                    onChange={e => setSelectedCountry(e.target.value)}
                >
                    <option value="">همه کشورها</option>
                    {countries.map((country, index) => (<option key={index} value={country}>
                            {country}
                        </option>))}
                </select>
            </div>

            {filteredUsers.length === 0 ? (
                <p className="text-center  text-gray-400">کاربری پیدا نشد.</p>) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredUsers.map((user, index) => (<UserCard key={user.login.uuid || index} user={user}/>))}
                </div>)}
        </div>);
}
