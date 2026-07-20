import { Outlet, createRootRoute, Link } from "@tanstack/react-router";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-[#F8FAFC] px-4 py-20">
      <div className="relative max-w-lg text-center">
        <div className="absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#539D32]/10 blur-3xl"></div>
        <h1 className="text-[8rem] font-black leading-none text-[#0B3C1A] drop-shadow-sm md:text-[10rem]">
          404
        </h1>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#0B3C1A] sm:text-3xl">
          Página não encontrada
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base text-[#0B3C1A]/70 sm:text-lg">
          Parece que você pintou fora das linhas! A página que você está procurando não existe ou foi movida.
        </p>
        <div className="mt-10 flex justify-center">
          <Link
            to="/"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#539D32] px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#539D32]/30 focus:outline-none focus:ring-2 focus:ring-[#539D32] focus:ring-offset-2"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] transition-transform duration-700 ease-in-out group-hover:translate-x-[100%]"></span>
            <span className="relative">Voltar ao Início</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-[#F8FAFC] px-4 py-20">
      <div className="relative max-w-lg text-center">
        <div className="absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-3xl"></div>
        <h1 className="text-4xl font-black tracking-tight text-[#0B3C1A] sm:text-5xl">
          Ops! Ocorreu um erro
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-[#0B3C1A]/70 sm:text-lg">
          Tivemos um pequeno imprevisto com a nossa tinta. Por favor, tente recarregar a página.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={reset}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#539D32] px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#539D32]/30 focus:outline-none focus:ring-2 focus:ring-[#539D32] focus:ring-offset-2"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] transition-transform duration-700 ease-in-out group-hover:translate-x-[100%]"></span>
            <span className="relative">Tentar Novamente</span>
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border-2 border-[#0B3C1A]/10 bg-transparent px-8 py-3.5 text-sm font-bold text-[#0B3C1A] transition-colors duration-300 hover:bg-[#0B3C1A]/5 focus:outline-none focus:ring-2 focus:ring-[#0B3C1A]/20 focus:ring-offset-2"
          >
            Página Inicial
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  return <Outlet />;
}
