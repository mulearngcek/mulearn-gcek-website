import Image from "next/image";
import { cn } from "@/lib/utils";
import { initialsOf, type TeamMember } from "@/content/team";
import { SocialLinks } from "./SocialLinks";

type MemberCardProps = {
  member: TeamMember;
  /** Larger horizontal layout for the core team. */
  featured?: boolean;
  className?: string;
};

export function MemberCard({ member, featured = false, className }: MemberCardProps) {
  const role = member.domain ? `${member.domain} ${member.role}` : member.role;

  return (
    <article
      className={cn(
        "group flex h-full rounded-2xl border border-ink/5 bg-white transition-all duration-200 ease-out-soft outline-offset-4 outline-brand-600 focus-visible:outline-2 motion-reduce:transition-none hover:-translate-y-0.5 hover:shadow-lift motion-reduce:hover:translate-y-0",
        featured ? "flex-row items-center gap-5 p-6" : "flex-col p-6",
        className,
      )}
    >
      <span
        className={cn(
          "relative grid shrink-0 select-none place-items-center overflow-hidden rounded-full bg-brand-100 font-display font-bold text-brand-700",
          featured ? "size-16 text-xl sm:size-[4.5rem] sm:text-2xl" : "size-14 text-lg",
        )}
      >
        {member.photo ? (
          <Image
            src={`/images/team/${member.photo}`}
            alt=""
            width={144}
            height={144}
            className="h-full w-full object-cover"
          />
        ) : (
          <span aria-hidden="true">{initialsOf(member.name)}</span>
        )}
      </span>

      <div className={cn("min-w-0", !featured && "mt-4 flex-1")}>
        <h3
          className={cn(
            "font-semibold tracking-tight text-ink",
            featured ? "text-lg sm:text-xl" : "text-base",
          )}
        >
          {member.name}
        </h3>
        <p
          className={cn(
            "mt-1 text-sm font-medium text-brand-600",
            featured && "sm:text-[15px]",
          )}
        >
          {role}
        </p>
      </div>

      {!featured && (
        <div className="mt-auto pt-3">
          <SocialLinks member={member} />
        </div>
      )}
    </article>
  );
}
