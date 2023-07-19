"use client";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";



const User = () => {
    const session = useSession();

  const router = useRouter();
  
  return (
    <section>

    </section>
  )
}

export default User