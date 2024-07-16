import {useContext} from "react";
import {UserContext} from "../../context/userContext.jsx";
import {Link} from "react-router-dom";
import { Copy, Code, Heart } from 'lucide-react'
export function Dashboard() {
    const {user} = useContext(UserContext);
    return (
        <>
            {/*<h1>Dashboard</h1>*/}
            {/*{!!user && <p>hi {user.name}</p>}*/}

            {/*<Link to="/test">test</Link>*/}

            <section>
                <div className="mx-auto max-w-7xl px-2 lg:px-8">
                    <div className="mb-4 max-w-lg">

                        <h2 className="mt-6 text-3xl font-bold leading-tight text-black">
                           WELCOME {user?.name.toUpperCase()}
                        </h2>
                    </div>
                    <hr/>
                    <div className="mt-8 grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <div className="flex items-start">
                            {/*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"*/}
                            {/*     stroke="currentColor" className="w-16 h-16">*/}
                            {/*    <path strokeLinecap="round" strokeLinejoin="round"*/}
                            {/*          d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"/>*/}
                            {/*</svg>*/}
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                                 className="bi bi-laptop" viewBox="0 0 16 16">
                                <path
                                    d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
                            </svg>

                            <div className="ml-5">
                                <h3 className="text-xl font-semibold text-black">Tests</h3>
                                <p className="mt-3 text-base text-gray-600">
                                    Write tests to improve yourself
                                </p>
                                <div className="pt-4">
                                    <Link to={"/test"}
                                          className="mt-3 text-base text-white bg-black hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-3 py-2">
                                        View All Tests
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                                 className="bi bi-bar-chart" viewBox="0 0 16 16">
                                <path
                                    d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z"/>
                            </svg>
                            <div className="ml-5">
                                <h3 className="text-xl font-semibold text-black">Results</h3>
                                <p className="mt-3 text-base text-gray-600">
                                    Check your test results
                                </p>
                                <div className="pt-4">
                                    <Link to={"/results"}
                                          className="mt-3 text-base text-white bg-black hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-3 py-2">
                                        View Results
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/*<button onClick={() => {*/}
            {/*    localStorage.removeItem("token")*/}
            {/*}}>Logout</button>*/}


        </>
    )
}