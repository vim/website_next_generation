"use client";

import { useState } from "react";
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";

type Script = {
	name: string;
	type: "colorScheme" | "utility" | "syntax";
	description: string;
};
const dummyScripts: Script[] = [
	{
		name: "Script 1",
		type: "colorScheme",
		description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
	},
	{
		name: "Script 2",
		type: "utility",
		description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
	},
	{
		name: "Script 3",
		type: "syntax",
		description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
	},
];

const columns: ColumnDef<Script>[] = [
	{
		accessorKey: "name",
		header: "Name",
	},
	{
		accessorKey: "download",
		header: "Download",
		cell: () => "Download Icon",
	},
	{
		accessorKey: "type",
		header: "Type",
	},
	{
		accessorKey: "description",
		header: "Description",
	},
	{
		accessorKey: "plus",
		header: "",
		cell: () => "plus icon",
	},
];

export default function Scripts() {
	const [data] = useState<Script[]>(dummyScripts);
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});
	return (
		<>
			<div className="flex items-center">
				<h1 className="h3">Scripts</h1>
				<div className="flex gap-3 mr-0 ml-auto">
					<button className="btn">Add New Script</button>
					<input type="text" />
				</div>
			</div>
			<table className="border-separate border-spacing-y-[5px]">
				<thead className="py-5 bg-green-500 bg-opacity-30">
					{table.getHeaderGroups().map(headerGroup => {
						return (
							<tr key={headerGroup.id}>
								{headerGroup.headers.map(header => {
									return (
										<th className="py-2 pl-3 text-left" id={header.id} key={header.id}>
											{" "}
											{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
										</th>
									);
								})}
							</tr>
						);
					})}
				</thead>
				<tbody>
					{table.getRowModel().rows.map(row => {
						return (
							<tr className="odd:bg-gray-500 even:bg-gray-900" key={row.id}>
								{row.getVisibleCells().map(cell => {
									return (
										<td className="pl-3" key={cell.id}>
											{flexRender(cell.column.columnDef.cell, cell.getContext())}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
