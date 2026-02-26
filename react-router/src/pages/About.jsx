import clsx from "clsx";
import useTheme from "../hooks/useTheme";

export default function About() {
  const { theme } = useTheme();

  return (
    <main
      className={clsx(
        "flex-1 p-8 transition-colors duration-300",
        theme === "light" && "bg-white text-gray-800",
        theme === "dark" && "bg-gray-800 text-white",
      )}
    >
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">About This App</h1>

        <div
          className={clsx(
            "p-6 rounded-lg mb-6",
            theme === "light" && "bg-purple-50 border border-purple-200",
            theme === "dark" && "bg-purple-900 border border-purple-700",
          )}
        >
          <h2 className="text-2xl font-semibold mb-4">
            React Context API Demo
          </h2>
          <p className="mb-4">
            This application demonstrates the power of React's Context API
            combined with React Router v7. It showcases how to manage global
            state without prop drilling and navigate between pages seamlessly.
          </p>
          <p>
            Built with modern React patterns, this project illustrates best
            practices for state management and routing in contemporary React
            applications.
          </p>
        </div>

        <div
          className={clsx(
            "p-6 rounded-lg mb-6",
            theme === "light" && "bg-green-50 border border-green-200",
            theme === "dark" && "bg-green-900 border border-green-700",
          )}
        >
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-xl">🎨</span>
              <div>
                <strong>Theme Toggle:</strong> Switch between light and dark
                modes instantly across all pages
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl">📦</span>
              <div>
                <strong>Global State Management:</strong> Theme state is managed
                via Context API without prop drilling
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl">🛣️</span>
              <div>
                <strong>Client-Side Routing:</strong> Navigate between pages
                using React Router v7
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl">⚛️</span>
              <div>
                <strong>Custom Hooks:</strong> Reusable `useTheme` hook for
                accessing theme throughout the app
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl">💨</span>
              <div>
                <strong>Smooth Transitions:</strong> CSS transitions provide
                smooth theme switching experience
              </div>
            </li>
          </ul>
        </div>

        <div
          className={clsx(
            "p-6 rounded-lg mb-6",
            theme === "light" && "bg-blue-50 border border-blue-200",
            theme === "dark" && "bg-blue-900 border border-blue-700",
          )}
        >
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Frontend</h3>
              <ul className="space-y-1 text-sm">
                <li>✓ React 19</li>
                <li>✓ React Router v7</li>
                <li>✓ Context API</li>
                <li>✓ Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Tools & Libraries</h3>
              <ul className="space-y-1 text-sm">
                <li>✓ Vite</li>
                <li>✓ clsx</li>
                <li>✓ ESLint</li>
                <li>✓ JavaScript</li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className={clsx(
            "p-6 rounded-lg",
            theme === "light" && "bg-amber-50 border border-amber-200",
            theme === "dark" && "bg-amber-900 border border-amber-700",
          )}
        >
          <h2 className="text-2xl font-semibold mb-4">Why Context API?</h2>
          <p className="mb-4">
            Context API is React's built-in solution for managing global state.
            It eliminates the need to pass props through multiple levels of
            components (prop drilling), making your code cleaner and easier to
            maintain.
          </p>
          <p>
            Combined with custom hooks like `useTheme`, you get a powerful,
            simple, and performant way to share state across your entire
            application without external dependencies.
          </p>
        </div>
      </div>
    </main>
  );
}
