import Image from "next/image";

export default function Home() {
    return (<main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Image
                src="/logo.png"
                alt="Portfolio Logo"
                width={100}
                height={50}
                priority
            />

            <div>
                <p className="fixed top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    Portfolio website by Vikramaditya Singh
                </p>
            </div>

        </main>);
}
