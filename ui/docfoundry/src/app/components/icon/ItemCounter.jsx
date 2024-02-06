import React from "react";
import {ChevronRightIcon} from "@/app/components/icon/ChevronRightIcon";
export const ItemCounter = ({number}) => (
    <div className="flex items-center gap-1 text-default-400">
        <span className="text-small">{number}</span>
        <ChevronRightIcon className="text-xl" />
    </div>
);