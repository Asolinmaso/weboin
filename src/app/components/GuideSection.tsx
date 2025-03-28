export default function GuidesSection() {
    return (
        <section className="text-white py-12 px-4 mt-20">
            <div className="max-w-screen mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="p-6 rounded-lg bg-gray-900">
                    <h2 className="text-lime-400 text-3xl font-bold">Front-end Guide</h2>
                    <div className="h-1 w-1/2 bg-lime-400 mt-1 mb-6"></div>

                    <ul className="space-y-4 leading-relaxed list-disc list-inside text-lg">
                        <li>Clone the exact project.</li>
                        <li>
                            Fill out the form first, and the form details should be added in card format.
                        </li>
                        <li>
                            The card length will be added to the home page dynamically, and placed &amp; unplaced values will also be updated dynamically.
                        </li>
                        <li>If we delete a card, it will update on the home page.</li>
                        <li>
                            Our requirement:
                            <ul className="list-decimal list-inside ml-5 space-y-1 mt-1 text-[#C9FD02FF]">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>ReactJS</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="p-6 rounded-lg bg-gray-900 text-lg">
                    <h2 className="text-lime-400 text-3xl font-bold">Fullstack Development Guide</h2>
                    <div className="h-1 w-2/3 bg-lime-400 mt-1 mb-6"></div>

                    <ul className="space-y-4 leading-relaxed list-disc list-inside">
                        <li>Clone the exact project.</li>
                        <li>
                            Fill out the form first, and the form details should be added in card format.
                        </li>
                        <li>
                            The card length will be added to the home page dynamically, and placed &amp; unplaced values will also be updated dynamically.
                        </li>
                        <li>If we delete a card, it will update on the home page.</li>
                        <li>
                            Our requirement (choose any one language for backend):
                            <ul className="list-decimal list-inside ml-5 space-y-1 mt-1 text-[#C9FD02FF]">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>ReactJS</li>
                                <li>Nodejs</li>
                                <li>Python</li>
                                <li>JAVA</li>
                                <li>MongoDB</li>
                                <li>SQL</li>
                            </ul>
                        </li>
                        <li>
                            For the backend, connect with the database using any language you know (Python, Node.js), and use either MongoDB or SQL.
                        </li>
                    </ul>
                </div>

                <div className="md:col-span-2 max-w-3xl mx-auto text-center border border-gray-800 rounded-lg p-6 bg-gray-900">
                    <h2 className="text-lime-400 text-2xl font-bold mb-2">Important Notes</h2>
                    <div className="h-1 w-1/4 bg-lime-400 mx-auto mb-6"></div>

                    <ul className="list-disc list-inside space-y-1 text-gray-200 font-bold text-lg">
                        <li>No need for notes files, they are for guidance only.</li>
                        <li>
                            Once completed, deploy the project to GitHub, Vercel, or Netlify
                            and upload the link in the given form.
                        </li>
                        <li>
                            We have attached asset files in zip format; check them out.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
