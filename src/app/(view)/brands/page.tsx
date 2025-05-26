import React from "react";

export default function Page() {
  return (
    <main className="!py-12 !px-4 md:!px-12">
      <h1 className="text-4xl font-bold text-center">
        3000+ brands and agencies work with our creators
      </h1>
      <div className="!mt-24">
        <div className="w-full grid grid-cols-6 !px-6 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              className="w-full aspect-square bg-center bg-contain bg-no-repeat"
              style={{
                backgroundImage: `url('/image/homepage/sponsor (${
                  i + 1
                }).jpg')`,
              }}
              key={i}
            />
          ))}
        </div>
        <div className="w-full grid grid-cols-6 !px-6 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              className="w-full aspect-square bg-center bg-contain bg-no-repeat"
              style={{
                backgroundImage: `url('/image/homepage/sponsor (${
                  i + 1
                }).jpg')`,
              }}
              key={i}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
