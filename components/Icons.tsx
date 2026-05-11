import type { ReactElement, SVGProps } from "react";

export type IconComponent = (props: SVGProps<SVGSVGElement>) => ReactElement;

const paths: Record<string, string> = {
  arrow: "M5 12h14m-6-6 6 6-6 6",
  chart: "M4 19V5m5 14V9m5 10V7m5 12V3",
  check: "m5 13 4 4L19 7",
  clipboard: "M9 5h6M9 3h6v4H9V3ZM6 7h12v14H6V7Zm4 8 2 2 4-5",
  clock: "M12 6v6l4 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  cloud: "M7 18a5 5 0 0 1 .7-9.95A6 6 0 0 1 19 10.5 4 4 0 0 1 18 18H7Zm5-3V8m0 0-3 3m3-3 3 3",
  cog: "M12 15.5A3.5 3.5 0 1 0 12 8a3.5 3.5 0 0 0 0 7.5Zm0-13v3m0 13v3m9.5-9.5h-3m-13 0h-3m16.4-6.4-2.1 2.1M7.2 16.8l-2.1 2.1m13.8 0-2.1-2.1M7.2 7.2 5.1 5.1",
  doc: "M7 3h7l5 5v13H7V3Zm7 0v5h5M10 13h6m-6 4h4",
  finger: "M12 11v4m0 4c-3-2-5-5-5-9a5 5 0 0 1 10 0v1m-7 4v-5a2 2 0 1 1 4 0v6m4-1v-4a6 6 0 0 0-12 0",
  lock: "M7 10V8a5 5 0 0 1 10 0v2M6 10h12v11H6V10Zm6 5v2",
  shield: "M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Zm-3 9 2 2 4-5",
  sparkles: "M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Zm7 12 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15ZM5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14Z",
  users: "M16 11a4 4 0 1 0-8 0m8 0a4 4 0 1 1-8 0m8 0c2.8.7 5 2.5 5 5v2H3v-2c0-2.5 2.2-4.3 5-5m10-2a3 3 0 0 1 3 3m-18 0a3 3 0 0 1 3-3",
};

export function makeIcon(name: keyof typeof paths): IconComponent {
  return function Icon(props) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
        <path d={paths[name]} />
      </svg>
    );
  };
}

export const ArrowRightIcon = makeIcon("arrow");
export const ChartBarIcon = makeIcon("chart");
export const CheckCircleIcon = makeIcon("check");
export const ClipboardDocumentCheckIcon = makeIcon("clipboard");
export const ClockIcon = makeIcon("clock");
export const CloudArrowUpIcon = makeIcon("cloud");
export const Cog6ToothIcon = makeIcon("cog");
export const DocumentMagnifyingGlassIcon = makeIcon("doc");
export const FingerPrintIcon = makeIcon("finger");
export const LockClosedIcon = makeIcon("lock");
export const ShieldCheckIcon = makeIcon("shield");
export const SparklesIcon = makeIcon("sparkles");
export const UserGroupIcon = makeIcon("users");
