export default function AppRouter() {
    return (<BrowserRouter>
     <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<h1>About</h1>} />
    </Routes>
    </BrowserRouter>)
};