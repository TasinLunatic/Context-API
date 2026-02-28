import React from 'react'
import { useParams } from 'react-router';
import { useSearchParams } from "react-router";

export default function Profile() {
    const {profileID}=useParams();
    const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>Profile
        <p>{`Profile ID: ${profileID}`}</p>
        <p>{`Search Params :${searchParams.get("mode")}`}</p>
    </div>
  )
}
