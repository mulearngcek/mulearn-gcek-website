import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { contactChannels, type ContactChannel } from "@/content/contact";

function Row({ channel, index }: { channel: ContactChannel; index: number }) {
  const clickable = Boolean(channel.href);

  const inner = (
    <>
      <h3 className="min-w-0 font-semibold text-ink">
        {channel.label}
      </h3>
      <span
        aria-hidden="true"
        className="hidden flex-1 -translate-y-0.5 border-b border-dotted border-ink/15 sm:block"
      />
      <p className="ml-auto flex shrink-0 items-center gap-2 text-right sm:ml-0">
        {"value" in channel && channel.value ? (
          <span className="text-sm text-ink-soft">{channel.value}</span>
        ) : null}
        {channel.status === "pending" ? (
          <span className="rounded-full border border-dashed border-ink/20 px-2.5 py-0.5 text-xs text-ink-muted">
            coming soon
          </span>
        ) : clickable ? (
          <ArrowUpRight
            className="size-4 text-brand-500 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
            aria-hidden="true"
          />
        ) : null}
      </p>
    </>
  );

  return (
    <Reveal delay={(index % 3) * 60}>
      {clickable ? (
        <a
          href={channel.href}
          {...(channel.external ? { target: "_blank", rel: "noreferrer" } : {})}
          className="group flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-xl px-5 py-4 transition-colors duration-150 outline-offset-[-3px] outline-brand-600 focus-visible:outline-2 hover:bg-paper-soft"
        >
          {inner}
        </a>
      ) : (
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 px-5 py-4">
          {inner}
        </div>
      )}
    </Reveal>
  );
}

export function ReachLedger() {
  return (
    <div className="mt-10 divide-y divide-ink/5 rounded-2xl border border-ink/5 bg-white">
      {contactChannels.map((channel, i) => (
        <Row key={channel.id} channel={channel} index={i} />
      ))}
    </div>
  );
}
