import imgseacrh from '@/public/static/auth/search.png'

const Search = () => {
  return (
    <label
      className="flex w-full my-5 justify-center items-center p-2 rounded-md border-2 border-sky-600 gap-3 bg-white"
      htmlFor="search"
    >
     <img src={imgseacrh.src} className="w-[30px] m-auto"></img>
      <input
        className="w-full placeholder:italic placeholder:text-black/30 bg-transparent border-none outline-none"
        placeholder="Search apa yang anda cariiiiiiii"
        type="text"
        name="search"
        id="search"
      />
    </label>
  );
};

export default Search;