const NotFound = () => {
  return (
    <div className="text-center">
      <h1 className="mt-[35vh] text-7xl">{":("}</h1>
      <p className="mt-4 mb-8">404 - Sorry, we couldn&apos;t find the page you were looking for.</p>
      <a className="rounded-md p-2 bg-[#cfb53b] text-[#ffffff] w-auto" href="/">Take me home!</a>
    </div>
  );
}

export default NotFound;