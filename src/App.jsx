import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "./layouts/MainLayout"
import HomePage from "./pages/homePage"
import ProjectDetailPage from "./pages/projectDetailPage"
import MaxLayout from "./layouts/MaxLayout"
import { Footer } from "./layouts/Footer"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
          />
          <Route path="/project/:id" element={
            <>
              <MaxLayout>
                <ProjectDetailPage />
              </MaxLayout>
              <Footer />
            </>
          }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
