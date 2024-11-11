export default function AppMain() {
    const products = ['prd1', 'prd2', 'prd3'];
    return (
        <main>
            <h2>The Main</h2>
            <section className="products">
                <ul>
                    {products.map((item, index) => <li key={index}>{item}</li>)}  {/*BETTER use id e NOT index as key!!*/}
                </ul>
            </section>
        </main>
    );
}