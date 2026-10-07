import Image from "next/image";

/** Brand mark (public/logo.png) plus the wordmark. */
export function Logo() {
  return (
    <span className="flex items-center gap-2.5 text-[15px] font-semibold tracking-tight text-fg">
      <Image src="/logo.png" alt="" width={36} height={22} priority className="h-[22px] w-auto" />
      Usaha AI
    </span>
  );
}
