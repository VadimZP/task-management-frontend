export default function Loading() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from(Array(7).keys()).map((item, index) => {
        return (
          <div
            className="rounded-lg border border-gray-200 p-6 shadow"
            key={index}
          >
            <div className="flex animate-pulse space-x-4">
              <div className="h-10 w-10 rounded-full bg-white"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 rounded bg-white"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 h-2 rounded bg-white"></div>
                    <div className="col-span-1 h-2 rounded bg-white"></div>
                  </div>
                  <div className="h-2 rounded bg-white"></div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
