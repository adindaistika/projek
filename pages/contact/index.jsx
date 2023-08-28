import Search from"@/components/search";
import Link from "next/link";
export default function Contact(props) {
    return (
        <main className="w-full lg:mx-auto text-black p-4">
          <div className="flex mt-4 w-full items-center gap-3">
            <button className="text-xs block p-2 rounded-md bg-green-700 hover:bg-green-500">
              Export Contact
            </button>
            <button className="p-2 text-xs rounded-md bg-green-700 hover:bg-green-500">Phonebook</button>
            <button className="p-2 text-xs rounded-md bg-green-700 hover:bg-green-500 ">Email</button>
            <button className="p-2 text-xs rounded-md bg-green-700 hover:bg-green-500">Scan</button>
            <button className="p-2 text-xs rounded-md bg-green-700 hover:bg-green-500">Message</button>
            <Link href={'/contact/add'}>
            <button className="p-2 text-xs rounded-md bg-green-700 hover:bg-green-500">AddContact</button>
            </Link>
            <div className="flex-auto">
              <Search />
            </div>
          </div>
          <div className="w-full my-5 gap-3">
            <table
              cellPadding={8}
              className="w-full border-collapse border border-slate-500 table-fixed"
            >
              <thead className="bg-sky-600">
                <tr>
                  <th className="border border-slate-600">No</th>
                  <th className="border border-slate-600">Nama</th>
                  <th className="border border-slate-600">Phone</th>
                  <th className="border border-slate-600">Phone Work</th>
                  <th className="border border-slate-600">Home</th>
                  <th className="border border-slate-600">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-600 text-center">1</td>
                  <td className="border border-slate-600">AdindaIstika</td>
                  <td className="border border-slate-600">085232034539</td>
                  <td className="border border-slate-600">085232034539</td>
                  <td className="border border-slate-600">085232034539</td>
                  <td className="text-xs font-semibold border border-slate-600">
                    <a href="#" className="py-1 px-3 mr-2 rounded-md bg-green-500">
                      Edit
                    </a>
                    <a href="#" className="py-1 px-3 rounded-md bg-rose-500">
                      Remove
                    </a>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                <td className="border border-slate-600 text-center">2</td>
                  <td className="border border-slate-600">Vivi</td>
                  <td className="border border-slate-600">08123456789</td>
                  <td className="border border-slate-600">08123456789</td>
                  <td className="border border-slate-600">08123456789</td>
                  <td className="text-xs font-semibold border border-slate-600">
                    <a href="#" className="py-1 px-3 mr-2 rounded-md bg-green-500">
                      Edit
                    </a>
                    <a href="#" className="py-1 px-3 rounded-md bg-rose-500">
                      Remove
                    </a>
                    </td>
                </tr>
              </tbody>
            </table>
          </div>
        
        </main>
      );
    };

export async function getServerSideProps() {
    let data = {
        title: "Contact"
    }
    return {
      props: data,
    };
}