'use client';

import { useState } from 'react';
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

type Script = {
    name: string;
    type: 'colorScheme' | 'utility' | 'syntax';
    description: string;
};
const dummyScripts: Script[] = [
    {
        name: 'Script 1',
        type: 'colorScheme',
        description:
            'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    },
    {
        name: 'Script 2',
        type: 'utility',
        description:
            'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    },
    {
        name: 'Script 3',
        type: 'syntax',
        description:
            'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    },
];

const columns: ColumnDef<Script>[] = [
    {
        accessorKey: 'name',
        header: 'Name',
    },
    {
        accessorKey: 'downloadIcon',
        header: 'Download',
    },
    {
        accessorKey: 'type',
        header: 'Type',
    },
    {
        accessorKey: 'description',
        header: 'Description',
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
        <table>
            <thead>
                {table.getHeaderGroups().map((headerGroup) => {
                    return (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <th id={header.id} key={header.id}>
                                        {' '}
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(header.column.columnDef.header, header.getContext())}
                                    </th>
                                );
                            })}
                        </tr>
                    );
                })}
            </thead>
            <tbody>
                {table.getRowModel().rows.map((row) => {
                    return (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => {
                                return (
                                    <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
