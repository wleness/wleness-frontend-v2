import React from "react";
// Components;
import PoliciesHeader from "../../components/headers/PoliciesHeader";
import Heading2xl from "../../components/Formatting/Heading2xl";
import Headingxl from "../../components/Formatting/Headingxl";
import List from "../../components/Formatting/List";
import Paragraphs from "../../components/Formatting/Paragraphs";

export default function PrivacyPolicy() {
  return (
    <>
      <PoliciesHeader
        heading="Privacy Policy"
        desc="Our Privacy Policy have been updated on 18th August 2023 "
      />
      <section className="container mx-auto py-8 text-justify font-medium">
        <Paragraphs
          texts={[
            "We at Wleness are committed to protecting the privacy and secrecy of the data you submit. The policies and practices governing the acquisition, use, and disclosure of users' Personal Information are described in our privacy policy. We strongly advise you to read this Privacy Policy carefully. We maintain client anonymity, abide by strong confidentiality guidelines, and ensure that all personal and health information obtained is transmitted over a highly secure environment to protect client privacy. We advise you to refrain from using the website, mobile application(s), or connected services if this privacy policy's contents conflict with your nation's applicable laws.",
          ]}
        />
        <Heading2xl text="Definitions" />
        <Headingxl text="Company" />
        <Paragraphs
          texts={[
            `Wleness is referred to as "thewleness.co," "Company," "Firm," "we," "our," "us," or "Service Provider" pertains to Green Clover IT Systems Private Ltd., the provider of Services mentioned in this document.`,
          ]}
        />
        <Headingxl text="User" />
        <Paragraphs
          texts={[
            `"Client," "user," "you," or "your" refers to you as the user of the website, mobile application(s), and recipient of our Services and resources."`,
          ]}
        />
        <Headingxl text="Platform" />
        <Paragraphs
          texts={[
            `"Platform" or similar terms denote any mobile app, website, or web links that the User can access to avail the Services provided by the Company`,
          ]}
        />
        <Headingxl text="Psychological Wellness Professional" />
        <Paragraphs
          texts={[
            `Terms such as "Psychological Wellness Practitioner," "Psychological Wellness Professional," "Wellness Professional," "therapist," "wellness advisor," "expert," "doctor," "consultant," or similar refer to the Psychological Wellness Practitioner.`,
          ]}
        />
        <Heading2xl text="Nature of Service" />
        <Paragraphs
          texts={[
            "Wleness is a platform for psychological well-being that offers services and solutions for emotional wellness to individuals and enterprises. These include but are not limited to, programs for organizational health that allow people who work for or are connected to organizations to access a range of goods and services. Wleness offers could consist of or are:",
            "Online and face-to-face consultation with expert Psychological Wellness Professionals (who have been authorized by Wleness to use the platform for delivering their Services)",
          ]}
        />
        <List
          items={[
            "Periodic self-assessments and psychological tests",
            "Workshops and/or webinars offered by trained Psychological Wellness Professionals",
            "Self-help tools, content and programs delivered through a range of channels including, but not restricted to, websites, mobile applications and emails",
            "Guide chat packs where clients can exchange encrypted private messages with their Psychological Wellness Professional in addition to the online consultation.",
            "Participation in user forums, topics, replies, comments, feedback, blogs and any other submissions on the platform.",
          ]}
        />
        <Paragraphs
          texts={[
            "Wleness reserves the right to add or remove products and Services from its offerings without prior notification. Those mentioned above shall, from now on, be referred to as “Services.",
          ]}
        />
        <Heading2xl text="Consent" />
        <Paragraphs
          texts={[
            "You hereby give your consent to the collection, storage, processing, disclosure, and transfer of your Personal Information following the terms of this Privacy Policy and the applicable data privacy laws in India by using the platform, giving us your Personal Information, using the features offered by the platform, or making a payment to Wleness.",
            "You acknowledge that whether you give your personal information to Wleness directly or indirectly through a third party or your organization, you do so voluntarily. You can choose whether or not to provide us with the requested personal information. You will also have the choice to withdraw your consent at any time as long as you notify us in writing at support@wleness.com. Despite this, you can withdraw your consent at any time if you access our platform through a third party or your organization, provided you explicitly inform the third party or your organization about such withdrawal of consent in writing. The third party or your organization would then instruct us to take action.",
            "Suppose you refuse to give us your personal information or revoke your consent at any time. In that case, we reserve the right not to use the information for the intended purposes and to impose restrictions on your platform use.",
          ]}
        />
        <Heading2xl text="Personal Information" />
        <Paragraphs
          texts={[
            "Your name, phone number, emergency contact number, gender, occupation, hometown, personal interests, email address, the reason(s) for cancelling an appointment with a healthcare professional, medical history, and any other information the Wellness Professional may need for you to engage with our Services are all examples of personal information that we will use to enable you to engage with our Services. We also get data from your emails, in-app inputs, assessments, and comments that you give to us. Any information you supply when contacting us by phone or email may be collected as personal information ('Personal Information').",
            "We gather this Personal Information primarily to give you a quick, easy, and tailored experience. Collecting Personal Information also allows users to set up profiles and accounts that can be used to communicate with our wellness specialists. You can modify some of the information you submit through your online account page or your profile information for the mobile application(s).",
            "We may use your Personal Information to:",
          ]}
        />
        <List
          items={[
            "Identify and reach you",
            "Resolve service and billing problems via telephone or email",
            "Assist you in scheduling appointments, remind you of upcoming or follow-up and cancelled appointments",
            "Provide you with further information, products and services and newsletters",
            "A better understanding of users' needs and interests",
            "Run statistical research (such research will only anonymously use your information and cannot be linked back to you)",
            "Detect and protect us against error, fraud, and other criminal activity",
            "Make disclosures as may be required under applicable law",
            "Improve our website, mobile application(s) to better serve you",
            "Allow us to better service you in responding to your customer service requests",
            "Run a contest, promotion, survey or other site, mobile application feature",
            "Process your financial transaction promptly",
          ]}
        />
        <Paragraphs
          texts={[
            "The Wellness Professionals and our app algorithms analyze your information to understand your condition better and offer you the most appropriate counselling service or digital experience. The counselling sessions and in-app experience may occasionally be customized by Wellness and/or Wellness Professionals using third-party tools. In such circumstances, only the minimum necessary information is disclosed to others.",
            "We're committed to protecting the confidentiality and accuracy of your personal information. You can let us know at any time if you change your mind about receiving certain emails from us by emailing support@wleness.com.",
          ]}
        />

        <Heading2xl text="Update Personal Information" />
        <Paragraphs
          texts={[
            "You can send updates and corrections to us at support@wleness.com if your information changes, needs to be updated or corrected, or if you have any complaints about how your personal information is being processed or used for any other reason. We will use commercially reasonable efforts to incorporate any changes you send us within a reasonable time frame. Wleness may not be able to make any changes to your Personal Information if you have provided it to a third-party platform from which you are accessing our Services; instead, you will need to contact the third-party platform to make any necessary updates.",
            "You can change your personal information from our website or mobile device if saved as part of your platform profile.",
            "For example, your responses to online tests cannot be changed or removed once entered as Personal Information. Please email us at support@wleness.com if you would like us to delete your records from our system. If we are not required by law to keep them, we will do our best to comply with your request.",
            "Please be aware that even if you delete your account, we will continue to store certain information for the duration specified by applicable laws as required by professional standards or by law for record-maintenance purposes (including but not limited to payment history, feedback, client information, etc.). Additionally, despite our best efforts to delete data from our databases and other records, residual information might still exist in those places.",
          ]}
        />

        <Heading2xl text="Cookies" />
        <Paragraphs
          texts={[
            `To gather data and improve your experience on our site, we utilize "cookies." We transfer a small data file called a cookie to your device's hard drive for record-keeping purposes. Cookies serve two purposes for us. First, we might employ persistent cookies to save your user information for upcoming Service logins. Second, we may use session ID cookies to enable specific Services features, better understand how you interact with the Services, track overall Services usage by users, and route internet traffic on the Services. When you log out of the Services and close your browser, session cookies—instead of persistent cookies—are removed from your computer.`,
            "To enhance your user experience, we may collaborate with third parties who set or read cookies on your browser. In such circumstances, you agree to their Privacy Policy and other conditions of use by utilizing the third-party services made available through our platform, and you waive all claims against Wleness for problems resulting from such use.",
            "You can tell your browser to stop accepting cookies or to ask you before accepting one from the websites you visit by modifying its settings. However, you might not be able to utilize all of the platform's features or functionalities if you refuse to allow cookies.",
          ]}
        />

        <Heading2xl text="Log Data" />
        <Paragraphs
          texts={[
            `Our servers automatically log information sent by your browser or mobile application ("Log Data") whenever you access the platform. The Internet Protocol ("IP") address of your computer, the type of browser you are using, the name of your device, the operating system version, the app configuration used to access the Platform, the website you were using before accessing our Services, the pages of our platform and Services that you visit, the time spent on those pages, the information you search for while using our Services, access times and dates, and other statistics may be included in this Log Data. We use this data to spot patterns, manage the website, track your location, compile broad demographic data for use in aggregate, make the site more user-friendly, and better personalize our services to your needs.`,
          ]}
        />

        <Heading2xl text="Confidentiality" />
        <Paragraphs
          texts={[
            "The information shared during a personal consultation is kept private by Wleness. The Wellness Professional shall take every measure reasonably necessary to safeguard any information collected through or maintained on a means. Wleness' Wellness Professionals must participate in a regular supervision system where all cases are discussed because we strive to provide high-quality services.",
            "The Wellness Professional will be required to share information with the clinical supervisor and others, including emergency contacts and other people deemed fit and necessary to maintain safety, including but not limited to family, friends, and law enforcement officials, or to comply with legal requirements, in cases involving a threat to the client's well-being or the well-being of another person (cases involving harm to self or harm to others).",
            "The Wellness Professional will be required to contact law enforcement officials and to abide by all legal requirements if they become aware of any criminal activity, including current or past abuse of children, the elderly, or people with disabilities. Clinically significant information may be disclosed to the appropriate expert with your permission if you must consult with another mental health or medical specialist. Other wellness specialists may have access to information and notes during the supervision process as necessary for clinical quality and safety. Before any information is shared with a third party outside of Wleness, every effort will be made to let you know.",
            "Except for the reasons stated above, only one else will access your personal information after receiving your consent, either verbally or in writing (by email, letter, or fax).",
            "The User consents to hold Wleness harmless if the User's Personal Information is compromised. If the User uses a third-party platform to access Wleness, the User is responsible for any data breaches caused by the third-party platform's actions or inactions.",
          ]}
        />

        <Heading2xl text="Third Party Disclosure" />
        <Paragraphs
          texts={[
            "Wleness will only trade, sell, or otherwise deal with your personal information after notice. However, this does not cover any storage or transfer to or from server/website hosting partners and other parties who help us run our platform, run our business, or provide service to you. Additionally, we may disclose your information when we determine that doing so is necessary to comply with legal requirements, uphold the terms and conditions of our website and mobile application, or safeguard the rights, safety, or property of us or others. Visitors' anonymous information, however, may be given to other parties for marketing, advertising, or other purposes.",
          ]}
        />

        <Heading2xl text="Security" />
        <Paragraphs
          texts={[
            "We apply administrative, physical, and technical safeguards to guard against unauthorized access, use, and disclosure of the information under our control. We will follow industry standards for information privacy and security when collecting, maintaining, accessing, utilizing, or disclosing your personal information. The phone or video conversations are not taped at any point. Wellness Professionals may be expected to keep track of both online and offline sessions in accordance with professional standards.",
            "We strongly advise against sharing your personal information in forums, comments, or any other publicly accessible areas on our site, notwithstanding the security precautions we have implemented. Any use or abuse of the User's information shared in connection with Wleness's services is not the responsibility of Wleness. Wleness will not be held responsible by the User for any storage- or security-related problems.",
            "You are obligated to ensure that your phone messages and email account are secure and private so that a third party cannot access them. Wleness will interact with you via one or both of these channels about various topics relating to your psychological wellness. Should a third party, with or without your knowledge, access your email or text messages, Wleness shall not be accountable for any breach of confidentiality.",
          ]}
        />

        <Heading2xl text="Links" />
        <Paragraphs
          texts={[
            "The platform might include links to other outside websites. Wleness may not always have control over third-party websites. Please know that Wleness disclaims all liability for third-party websites' privacy policies. Wleness advises you to read the privacy policies of every third-party website and mobile application that collects Personal Information before proceeding when you leave the platform. You solely assume all risk if you choose to access any of the third-party websites connected to the forum. Wleness shall not be responsible for notification of any change in name or location of any information on the websites, and any links to any partners' websites are the responsibility of the entity providing the connection, not Wleness.",
          ]}
        />

        <Heading2xl text="Persons Below The Age of 18" />
        <Paragraphs
          texts={[
            "Our website, mobile applications, and services are not intended for users under 18. We only knowingly invite anyone older than 18 to participate independently in any of our Services.",
          ]}
        />

        <Heading2xl text="Changes To Policy" />
        <Paragraphs
          texts={[
            "Wleness retains the right to modify or eliminate any clause in the Privacy Policy without providing prior notice or incurring any duty to third parties. We may make a reasonable effort, but we are not obligated to post a message on the website or email informing you of material changes to how we treat your Personal Information or the Privacy Policy so that you can review them before using the platform again.",
            "As always, you can contact Wleness to stop using our platform and deactivate your account if you are registered with us directly if you disagree with any of the modifications to our terms and no longer wish to use the platform. To deactivate your account or stop using our Services if you signed up for our platform via a third-party platform or are accessing our Services through your workplace, you must contact the third-party platform or your employer.",
            "Unless otherwise specified, our current Privacy Policy covers any information Wleness has on you and your account. You agree to the modified terms by using the Services on the websites, mobile application(s) or by accessing the websites or mobile application(s) after receiving a notice of change from us or after it has been posted on our website.",
          ]}
        />

        <Heading2xl text="Grievance Redressal" />
        <Paragraphs
          texts={[
            "Wleness has created a Grievance Redressal Forum to resolve user complaints. You can contact our Grievance Redressal Officer, [Name], at support@wleness.com if you're unhappy with our services. We promise to respond to your complaint within a month of receiving it.",
          ]}
        />

        <Heading2xl text="Jurisdiction" />
        <Paragraphs
          texts={[
            "The courts in Delhi/Harayan, India, will have exclusive jurisdiction over any and all disputes involving this Policy that arise between the user and Wleness, including how this Policy's terms should be interpreted in accordance with the jurisdictional policies of Wleness, which have been drafted in accordance with and compliance with Indian law.",
          ]}
        />

        <Heading2xl text="Contact Information" />
        <Paragraphs
          texts={[
            "Registered Address:  Springhouse Coworking, Plot no. 2, Sector- 43, Gurugram - 122009",
            "E-mail: support@wleness.com",
          ]}
        />
      </section>
    </>
  );
}
