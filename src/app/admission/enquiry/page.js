import { Phone, Mail, MapPin } from "lucide-react";
import { contactInfo } from "../../../../data/navigation";
import PageHero from "../../../../components/common/PageHero";
import EnquiryForm from "../../../../components/admission/EnquiryForm";
import ContentBlock from "../../../../components/common/ContentBlock";

export const metadata = { title: "Admission Enquiry" };

export default function AdmissionEnquiryPage() {
  return (
    <>
      <PageHero
        eyebrow="Admission"
        title="Admission Enquiry"
        subtitle="Share your details and our admission team will guide you through the next steps."
        breadcrumbs={[
          { label: "Admission", href: "/admission" },
          { label: "Enquiry" },
        ]}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.3fr_1fr]">
          <EnquiryForm />

          <div className="flex flex-col gap-6">
            <ContentBlock
              eyebrow="Reach Us Directly"
              title="Prefer to Talk?"
              paragraphs={[
                "Our admission office is happy to answer questions over phone or email.",
              ]}
            />
            <div className="flex flex-col gap-4">
              <a
                href={contactInfo.phoneHref}
                className="flex items-center gap-3 rounded-2xl border border-hairline bg-bg-soft px-5 py-4 text-sm font-medium text-[var(--color-text)] transition hover:border-navy"
              >
                <Phone size={18} className="text-navy" /> {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 rounded-2xl border border-hairline bg-bg-soft px-5 py-4 text-sm font-medium text-[var(--color-text)] transition hover:border-navy"
              >
                <Mail size={18} className="text-navy" /> {contactInfo.email}
              </a>
              <div className="flex items-start gap-3 rounded-2xl border border-hairline bg-bg-soft px-5 py-4 text-sm font-medium text-[var(--color-text)]">
                <MapPin size={18} className="mt-0.5 shrink-0 text-navy" />{" "}
                {contactInfo.address}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
