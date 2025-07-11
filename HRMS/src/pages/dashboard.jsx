import React from "react";
import stats from "../components/Dashboard/statdata";
import Statcard from "../components/Dashboard/statcard";



export default function Dashboard() {
  return (
    <>
        <h1 className="text-2xl font-bold text-grey-950">Dashboard Overview</h1>
        <div className="flex items-center justify-between">
            {stats.map((item,index) => {
                return (
                    <Statcard
                        key={index}
                        title={item.title}
                        count={item.count}
                        icon={<item.icon/>}
                        color={item.color}
                    />
                );
            })}
        </div>
    </>
  )
}