import { PhoneCall } from 'lucide-react';

export function MobileCallBar({ t, businessInfo }) {
  return (
    <a className="mobile-call-bar" href={businessInfo.phoneHref}>
      <PhoneCall size={19} aria-hidden="true" />
      <span>{t.emergency.mobileCall}</span>
    </a>
  );
}
