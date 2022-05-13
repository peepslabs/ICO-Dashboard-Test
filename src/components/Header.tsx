import { useWeb3React } from "@web3-react/core";
import React from "react";

import { Account } from "./Account";
import { Balance } from "./Balance";
import { ChainId } from "./ChainId";

type Props = {
  children: React.ReactNode;
};

export function Header({ children }: Props) {
  const { active, error } = useWeb3React();

  return (
    <div className="relative py-3 sm:max-w-5xl sm:mx-auto mb-2 shadow-lg navbar bg-base-200 text-neutral-content rounded-box">
      <div className="flex-1 px-2 mx-2">
        <span className="text-lg font-bold">{active ? "🟢" : error ? "🔴" : "🟠"}</span>
        {children}
      </div>
      <div className="flex-none hidden px-2 mx-2 lg:flex">
        <div className="flex items-stretch">
          <ChainId />
          <Account />
          <Balance />
        </div>
      </div>
    </div>
  );
}
