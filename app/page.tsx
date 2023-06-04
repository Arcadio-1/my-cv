import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex">
      <aside className="border-2 h-screen">
        <header>
          <Image
            src={"/images/profile.png"}
            width={40}
            height={40}
            alt="skandari"
          />
          <h2>arcadio Alexander</h2>
          <ul className="flex w-full">
            <li className="2px solid bg-red-500">
              <Image
                src={"/images/social/email.svg"}
                alt="email"
                width={20}
                height={20}
              />
            </li>
            <li className="2px solid bg-red-500">
              <Image
                src={"/images/social/email.svg"}
                alt="email"
                width={20}
                height={20}
              />
            </li>
            <li className="2px solid bg-red-500">
              <Image
                src={"/images/social/email.svg"}
                alt="email"
                width={20}
                height={20}
              />
            </li>
            <li className="2px solid bg-red-500">
              <Image
                src={"/images/social/email.svg"}
                alt="email"
                width={20}
                height={20}
              />
            </li>
            <li className="2px solid bg-red-500">
              <Image
                src={"/images/social/email.svg"}
                alt="email"
                width={20}
                height={20}
              />
            </li>
            <li className="2px solid bg-red-500">
              <Image
                src={"/images/social/email.svg"}
                alt="email"
                width={20}
                height={20}
              />
            </li>
            <li className="2px solid bg-red-500">
              <Image
                src={"/images/social/email.svg"}
                alt="email"
                width={20}
                height={20}
              />
            </li>
          </ul>
          <nav>
            <ul>
              <li>
                <Link href={"#hero"}>
                  <Image
                    src={"/images/nav/home.svg"}
                    width={20}
                    height={20}
                    alt="home"
                  />
                  <span>آغاز</span>
                </Link>
              </li>
              <li>
                <Link href={"#hero"}>
                  <Image
                    src={"/images/nav/home.svg"}
                    width={20}
                    height={20}
                    alt="home"
                  />
                  <span>آغاز</span>
                </Link>
              </li>
              <li>
                <Link href={"#hero"}>
                  <Image
                    src={"/images/nav/home.svg"}
                    width={20}
                    height={20}
                    alt="home"
                  />
                  <span>آغاز</span>
                </Link>
              </li>
              <li>
                <Link href={"#hero"}>
                  <Image
                    src={"/images/nav/home.svg"}
                    width={20}
                    height={20}
                    alt="home"
                  />
                  <span>آغاز</span>
                </Link>
              </li>
              <li>
                <Link href={"#hero"}>
                  <Image
                    src={"/images/nav/home.svg"}
                    width={20}
                    height={20}
                    alt="home"
                  />
                  <span>آغاز</span>
                </Link>
              </li>
              <li>
                <Link href={"#hero"}>
                  <Image
                    src={"/images/nav/home.svg"}
                    width={20}
                    height={20}
                    alt="home"
                  />
                  <span>آغاز</span>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </aside>
      <main></main>
    </div>
  );
}
