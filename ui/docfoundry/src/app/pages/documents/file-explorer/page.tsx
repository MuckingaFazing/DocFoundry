'use client'
import React, { useState,useRef, useEffect } from 'react';

import {
    Button,
    Divider,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Input,
    Listbox,
    ListboxItem
} from "@nextui-org/react";
import {IconWrapper} from "../../.../../../components/icon/IconWrapper";
import {ItemCounter} from "../../.../../../components/icon/ItemCounter";
import {TagIcon} from "../../../components/icon/TagIcon";
import {SearchIcon} from "@/app/components/icon/SearchIcon";
import {ChevronDownIcon} from "@/app/components/icon/ChevronDownIcon";
import {regions,NodeService} from "@/app/pages/documents/file-explorer/data";
import {capitalize} from "@/app/pages/settings/s3-config/utils";
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';

import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import {classNames} from "primereact/utils";
import {DownloadIcon} from "primereact/icons/download";





export default function App() {
    const [filterValue, setFilterValue] = React.useState("");
    const [statusFilter, setStatusFilter] = React.useState("all");
    const [nodes, setNodes] = useState([]);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);

    const onSelect = (event) => {
        toast.current.show({ severity: 'info', summary: 'Node Selected', detail: event.node.data.name });
    };

    const onUnselect = (event) => {
        toast.current.show({ severity: 'warn', summary: 'Node Unselected', detail: event.node.data.name });
    };
    const actionTemplate = () => {
        return (
            <div className="">
                <Button className=" h-6 " endContent={<DownloadIcon  />} variant="flat">
                </Button>
            </div>
        );
    };

    const header = <div className="text-xl font-bold">File Viewer</div>;
    const footer = (
        <div className="flex justify-content-start">
            <Button icon="pi pi-refresh" label="Reload" severity="warning">Refresh</Button>
        </div>
    );

    const toast = useRef(null);
    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);
    const onSearchChange = React.useCallback((value) => {
        if (value) {
            setFilterValue(value);
            setPage(1);
        } else {
            setFilterValue("");
        }
    }, []);
    return (
        <div>
            <div className="flex flex-col gap-4">
                <div className="flex justify-between gap-3 items-end">

                    <Input
                        isClearable
                        className="w-full sm:max-w-[30%]"
                        placeholder="Search by name..."
                        startContent={<SearchIcon />}
                        value={filterValue}
                        onClear={() => onClear()}
                        onValueChange={onSearchChange}
                    />
                    <div className="flex gap-3">
                        <Dropdown>
                            <DropdownTrigger className="hidden sm:flex">
                                <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                                    Region
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                disallowEmptySelection
                                aria-label="Table Columns"
                                closeOnSelect={false}
                                selectedKeys={statusFilter}
                                selectionMode="multiple"
                                onSelectionChange={setStatusFilter}
                            >
                                {regions.map((status) => (
                                    <DropdownItem key={status.uid} className="capitalize">
                                        {capitalize(status.name)}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>

                <Divider className="my-2" />
                <div className="flex gap-4">
                    <div className=" p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 w-[300px] overflow-visible shadow-small rounded-medium">
                        <Listbox
                            aria-label="User Menu"
                            onAction={(key) => alert(key)}

                            itemClasses={{
                                base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
                            }}
                        >

                            <ListboxItem
                                key="Bucket1"
                                className="group h-auto py-3"
                                endContent={<ItemCounter number={399} />}
                                startContent={
                                    <IconWrapper className="bg-primary/10 text-primary">
                                        <TagIcon className="text-lg" />
                                    </IconWrapper>
                                }
                                textValue="Bucket1"
                            >
                                <div className="flex flex-col gap-1">
                                    <span>Bucket1</span>
                                    <div className="px-2 py-1 rounded-small bg-default-100 group-data-[hover=true]:bg-default-200">
                                        <div className="flex gap-2 text-tiny">
                                            <span className="text-default-500">eu-west 1</span>
                                        </div>
                                    </div>

                                </div>
                            </ListboxItem>
                            <ListboxItem
                                key="Bucket2"
                                className="group h-auto py-3"
                                endContent={<ItemCounter number={399} />}
                                startContent={
                                    <IconWrapper className="bg-primary/10 text-primary">
                                        <TagIcon className="text-lg" />
                                    </IconWrapper>
                                }
                                textValue="Bucket2"
                            >
                                <div className="flex flex-col gap-1">
                                    <span>Bucket2</span>
                                    <div className="px-2 py-1 rounded-small bg-default-100 group-data-[hover=true]:bg-default-200">
                                        <div className="flex gap-2 text-tiny">
                                            <span className="text-default-500">eu-west 1</span>
                                        </div>
                                    </div>
                                </div>
                            </ListboxItem>
                            <ListboxItem
                                key="Bucket3"
                                className="group h-auto py-3"
                                endContent={<ItemCounter number={399} />}
                                startContent={
                                    <IconWrapper className="bg-primary/10 text-primary">
                                        <TagIcon className="text-lg" />
                                    </IconWrapper>
                                }
                                textValue="Bucket3"
                            >
                                <div className="flex flex-col gap-1">
                                    <span>Bucket3</span>
                                    <div className="px-2 py-1 rounded-small bg-default-100 group-data-[hover=true]:bg-default-200">
                                        <div className="flex gap-2 text-tiny">
                                            <span className="text-default-500">eu-west 1</span>
                                        </div>
                                    </div>
                                </div>
                            </ListboxItem>
                            <ListboxItem
                                key="Bucket4"
                                className="group h-auto py-3"
                                endContent={<ItemCounter number={399} />}
                                startContent={
                                    <IconWrapper className="bg-primary/10 text-primary">
                                        <TagIcon className="text-lg" />
                                    </IconWrapper>
                                }
                                textValue="Bucket4"
                            >
                                <div className="flex flex-col gap-1">
                                    <span>Bucket3</span>
                                    <div className="px-2 py-1 rounded-small bg-default-100 group-data-[hover=true]:bg-default-200">
                                        <div className="flex gap-2 text-tiny">
                                            <span className="text-default-500">eu-west 1</span>
                                        </div>
                                    </div>
                                </div>
                            </ListboxItem>
                        </Listbox>
                    </div>
                    <div className=" p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 w-full overflow-visible shadow-small rounded-medium">
                        {/*https://primereact.org/treetable/#row_selection_events*/}
                        <Toast ref={toast} />
                        <TreeTable value={nodes} header={header} footer={footer}  paginator rows={5} rowsPerPageOptions={[5, 10, 25]} selectionMode="single" selectionKeys={selectedNodeKey} onSelectionChange={(e) => setSelectedNodeKey(e.value)} metaKeySelection={false} onSelect={onSelect} onUnselect={onUnselect} tableStyle={{ minWidth: '50rem', lineHeight:'0.2rem' }}>
                            <Column field="name" header="Name" expander filter filterPlaceholder="Filter by name"></Column>
                            <Column field="size" header="Size" filter filterPlaceholder="Filter by name"></Column>
                            <Column field="type" header="Type" filter filterPlaceholder="Filter by name"></Column>
                            <Column field="Action" header="Action" body={actionTemplate} />
                        </TreeTable>
                    </div>
                </div>



        </div>
        </div>
    );
}
