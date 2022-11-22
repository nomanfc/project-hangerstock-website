import React, { useState, useEffect } from "react";

const Terms = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function reportWindowSize() {
      setWindowWidth(window.innerWidth);
    }
    // Trigger this function on resize
    window.addEventListener("resize", reportWindowSize);
    //  Cleanup for componentWillUnmount
    return () => window.removeEventListener("resize", reportWindowSize);
  }, []);
  return (
    <div
      style={{ width: windowWidth < 1200 ? "90%" : "900px", margin: "auto" }}
    >
      <div
        style={{
          fontSize: "40px",
          fontWeight: 700,
          textAlign: "center",
          color: "#599f22",
          margin: "80px auto 70px auto",
        }}
      >
        TERMS OF USE
      </div>

      <div style={{ textAlign: "justify", color: "#000000" }}>
        <p style={{ marginBottom: "10px" }}>
          Thank you for visiting Hanger Stock (“HS” or “we”). Please carefully
          read these Terms of Use and our Privacy Policy, which is incorporated
          into these Terms of Use by this reference. These Terms of Use apply to
          Hyena Auction websites (the “Platform”), applications, marketplaces
          and services (collectively, the “Services”). “You” or “Buyer” shall
          mean any visitor to the Platform or user of the Services and includes
          the entity that creates an account or logs into the Services for the
          purpose of viewing, bidding upon, purchasing, or selling inventory
          products (“Inventory Products”) or using any services ancillary
          thereto.
        </p>
        <p style={{ marginBottom: "10px" }}>
          If you are purchasing Inventory Products from Hanger Stock Supply,
          then the Hyena Auction Supply Terms of Purchase located at
          https://bstocksupply.com/terms-of-purchase/ shall also apply and are
          incorporated into these Terms of Use by this reference.
        </p>
        <p style={{ marginBottom: "10px" }}>
          PLEASE READ SECTION 10 (DISPUTE RESOLUTION) CAREFULLY. IT AFFECTS YOUR
          RIGHTS AND WILL HAVE A SUBSTANTIAL IMPACT ON HOW CLAIMS OR DISPUTES
          WILL BE RESOLVED. BY USING SERVICES, YOU AGREE TO BE BOUND BY THE
          DISPUTE RESOLUTION POLICIES DESC
        </p>
        <p style={{ marginBottom: "10px" }}>
          These Terms of Use relate to the following:
        </p>
        <ol>
          <li> Privacy and Data Security; Account Information</li>
          <li> Content</li>
          <li> Your Use of the Services</li>
          <li> Terms of Bidding</li>
          <li> User Submissions, Feedback and Information</li>
          <li> Copyright Policy</li>
          <li> Links to Other Sites </li>
          <li> Disclaimer; Limitation of Liability; Indemnity </li>
          <li> Violation of these Terms of Use</li>
          <li> Governing Law; Dispute Resolution</li>
          <li> User Outside the United States</li>
          <li> Miscellaneous</li>
          <li> Modifications to Terms</li>
          <li> Questions and Contact Information U</li>
        </ol>
        <p style={{ marginBottom: "10px" }}>
          Unless otherwise noted, the Services are the property of Hanger Stock
          and its licensors. By using the Services, you agree to these Terms of
          Use, our Privacy Policy, the operating rules and policies applicable
          to the Services as may be published or provided by Hyena Auction or
          Sellers of Inventory Products (including by posting on the Platform)
          from time to time, and all applicable laws, rules and regulations. If
          you do not agree to these Terms of Use, do not use the Services.
        </p>
        <p style={{ marginBottom: "30px" }}>
          If you are entering into these Terms of Use on behalf of a company or
          other legal entity, you represent that you have the authority to bind
          such entity to these Terms of Use. You may not use the Services if you
          do not have such authority.
        </p>
        <h5 style={{ marginBottom: "15px" }}>
          1. Privacy and Data Security; Account Information
        </h5>
        <p style={{ marginBottom: "10px" }}>
          Please refer to our Privacy Policy for information on how we collect,
          use and disclose information from our users. Additionally, by using
          the Services, you acknowledge and agree that Internet transmissions
          are never completely private or secure. You understand that
          transmissions to or through the Services may be intercepted by others,
          and users assume the risk of security breaches and all consequences
          resulting from them. Please do not send us any sensitive personal
          information.
        </p>
        <p style={{ marginBottom: "10px" }}>
          Some use of the Services requires that you create a User Account. Only
          one User Account per user is permitted. When creating your User
          Account, you must provide accurate and complete profile information,
          and you must keep this information current. You may never use another
          User’s User Account without permission. You are solely responsible for
          the activity that occurs on your User Account, and you must keep your
          User Account password secure. We encourage you to use “strong”
          passwords (passwords that use a combination of upper and lowercase
          letters, numbers and symbols) with your User Account. You must notify
          us immediately of any breach of security or unauthorized use of your
          User Account. We will not be liable for any losses caused by any
          unauthorized use of your User Account.
        </p>
        <p style={{ marginBottom: "25px" }}>
          When you create a User Account, you will be required to submit a
          resale certificate, a VAT ID, Company Tax ID, or similar documentation
          applicable to your jurisdiction that confirms the user as a reseller
          (“Certificate”). By submitting such Certificate, you hereby authorize
          Hanger Stock, and hereby provide Hyena Auction a continuing
          authorization and consent, to utilize and replicate, as applicable,
          such Certificate and the e-signature affixed thereto as necessary to
          confirm reseller status for all applicable transactions and purchases
          through the Services.
        </p>
        <h5 style={{ marginBottom: "15px" }}> 2. Content</h5>
        <p style={{ marginBottom: "10px" }}>
          Hanger Stock is an intermediary that provides the Services through
          which buyers may purchase inventory from sellers. Hyena Auction does
          not sell inventory, and is not a party to any purchase and sale
          transaction, but merely provides the platform through which a purchase
          and sale may be transacted between a buyer and seller. Hanger Stock
          does not inspect, and makes no representations or warranties
          regarding, any inventory. Further, Hanger Stock does endorse any
          seller or buyer, and makes no representations or warranties regarding
          any seller or buyer. You should exercise caution, read all details
          about the inventory provided by sellers, and use your independent
          judgment before bidding upon or purchasing inventory.
        </p>
        <p style={{ marginBottom: "10px" }}>
          Unless otherwise noted, all text, graphics, user interfaces, visual
          interfaces, photographs, trademarks, logos, sounds, music, artwork,
          and computer code (collectively, “Content”), including but not limited
          to the design, structure, selection, coordination, expression, “look
          and feel” and arrangement of such Content, contained in the Services
          is owned, controlled or licensed by or to Hyena Auction and is
          protected by trade dress, copyright, patent and trademark laws, and
          various other intellectual property rights. “Hanger Stock” and the
          Hanger Stock logos and designs are trademarks, service marks or trade
          dress (“Marks”) of Hanger Stock, and may not be used in connection
          with any product or service that is not Hanger Stock‘s or in a manner
          that is likely to cause confusion among customers. All other
          trademarks and service marks not owned by Hyena Auction that appear in
          the Services or on the Platform are the property of their respective
          owners. Access to the Services or Platform does not confer and shall
          not be considered as conferring upon anyone any license under any of
          Hanger Stock’s or any third-party’s intellectual property rights.
          Hyena Auction reserves all rights not expressly granted herein.
        </p>
        <p style={{ marginBottom: "25px" }}>
          Except as expressly provided in these Terms of Use, no part of the
          Services and no Content may be copied, reproduced, republished,
          uploaded, posted, publicly displayed, encoded, translated,
          transmitted, or distributed in any way to any other computer, server,
          website or another medium for publication or distribution or for any
          commercial enterprise, without Hanger Stock’s express prior written
          consent.
        </p>
        <h5 style={{ marginBottom: "15px" }}>3. Your Use of the Services</h5>
        <p style={{ marginBottom: "10px" }}>
          As part of the Services, we may provide you access to data,
          information, and content relating to inventory available for sale,
          including without limitation current and historical item listings,
          descriptions, bids, selling prices, values, and other related
          information, materials, and content (“Listing Data”).
        </p>
        <p style={{ marginBottom: "10px" }}>
          You may access and use Listing Data only in order to assist you in
          bidding, via the Services, on the inventory to which such Listing Data
          relates (the “Permitted Uses”). With respect to Listing Data, you will
          not, and you will not permit any third party to, use any Listing Data
          in any manner or for any purpose other than the Permitted Uses,
          without Hanger Stock ’s prior express written consent. For clarity,
          and without limiting the foregoing, the following activities are not
          permitted: (a) recording, copying or storing any Listing Data in any
          manner or for any purpose whatsoever, other than for the Permitted
          Uses; (b) directly or indirectly publishing, transmitting or
          distributing Listing Data, or any derivative works thereof including
          reports or other analyses regarding the secondary market, in any
          manner for any form of monetary or other valuable consideration; (c)
          using or referencing Listing Data in connection with any securities
          trading activities; or (d) incorporating Listing Data in any manner
          into used product pricing tools, dashboards, spreadsheets or other
          visualization products.
        </p>
        <p style={{ marginBottom: "10px" }}>
          In connection with your use of the Services, you will not, and you
          will not assist, permit or enable others to, do any of the following:
          disassemble, reverse engineer, decode or decompile any part of the
          Services, including, without limitation, the online bidding engine and
          algorithmic pricing tools;
        </p>
        <p style={{ marginBottom: "10px" }}>
          Use any robot, spider, scraper, data mining tool, data gathering or
          extraction tool, or any other automated means, to access, collect,
          copy or record the Services; display, mirror or frame the Services, or
          any individual element within the Services, Hanger Stock’s name, any
          Hyena Auction trademark, logo or other proprietary information, or the
          layout and design of any page or form contained on a page, without ’
          Hyena Auction s express written consent;
        </p>
        <p style={{ marginBottom: "10px" }}>
          Copy, rent, lease, sell, transfer, assign, sublicense, modify, alter,
          or create derivative works of any part of the Services, the Content or
          any of our intellectual property;remove any copyright notices or
          proprietary legends from the Services; ake photos, screenshots or
          other images of the Services or otherwise extract reports and other
          output of the Services, other than records of your listing
          registrations and past purchases that you take via any download and
          related functionality provided on the Services; use the Services in a
          manner that impacts the stability of our servers, the operation or
          performance of the Services or any other user’s use of the Services,
          or the behavior of other applications using the Services; attempt to
          probe, scan, or test the vulnerability of any Hyena Auction system or
          network or breach any security or authentication measures; send
          unsolicited email, including promotions and/or advertising of products
          or services;
        </p>
        <p style={{ marginBottom: "10px" }}>
          Use the Services in any manner or for any purpose that violates any
          applicable law, regulation, legal requirement or obligation,
          contractual obligation, or any right of any person including, but not
          limited to, intellectual property rights, rights of privacy and/or
          rights of personality, or which otherwise may be harmful (in our sole
          discretion) to us, our providers, our suppliers or users; use the
          Services in competition with us, to develop competing products or
          services, or otherwise to our detriment or commercial disadvantage;
          use the Services for benchmarking or competitive analysis of the
          Services; attempt to interfere with, compromise the system integrity
          or security of, or decipher any transmissions to or from, the servers
          running the Services;interfere with or damage the Services, including,
          without limitation, through the use of viruses, cancel bots, Trojan
          horses, harmful code, flood pings, denial-of-service attacks, packet
          or IP spoofing, forged routing or electronic mail address information
          or similar methods or technology; impersonate another person or
          misrepresent your affiliation with a person or entity, hide or attempt
          to hide your identity, or otherwise use the Services for any invasive
          or fraudulent purpose, including, for example, for domain spoofing or
          other forms of phishing;
        </p>
        <p style={{ marginBottom: "10px" }}>
          Bypass the measures we may use to prevent or restrict access to the
          Services or enforce limitations on use of the Services or the content
          therein, including without limitation features that prevent or
          restrict use or copying of any content; identify us or display any
          portion of the Services on any site or service that disparages us or
          our products or services, or infringes any of our Intellectual
          Property or other rights;
        </p>
        <p style={{ marginBottom: "10px" }}>
          Identify or refer to us or the Services in a manner that could
          reasonably imply an endorsement, relationship or affiliation with or
          sponsorship between you or a third party and us, other than your
          permitted use of the Services under these Terms of Use, without our
          prior express written consent;engage in any form of shill bidding,
          including collusion, bid manipulation and bidding on items that you,
          or a party affiliated with you, are selling; arrange for or engage in
          transactions or payments for Inventory Products outside of the Hanger
          Stock platform; misuse, exploit or abuse our dispute policies or take
          other action that in our sole discretion overburdens, misuses,
          exploits or abuses the Services; post, publish or otherwise
          communicate any content or message that is defamatory, offensive,
          promotes discrimination, bigotry, racism, hatred, harassment or harm
          against any individual or group, or is violent or threatening or
          promotes violence or actions that are threatening to any other person.
        </p>
        <p style={{ marginBottom: "10px" }}>
          You represent and warrant that all information you submit to or
          through the Services in connection with the bidding upon or purchase
          of inventory is true, complete and accurate.
        </p>
        <p style={{ marginBottom: "10px" }}>
          Hanger Stock reserves the right, at any time, without notice: (1) to
          modify, suspend or terminate operation of or access to the Services,
          or any portion of the Services, for any reason; (2) to modify or
          change the Services, or any portion of the Services, and any
          applicable policies or terms; and (3) to interrupt the operation of
          the Services, or any portion of the Services, as necessary to perform
          routine or non-routine maintenance, error correction, or other
          changes.
        </p>
        <p style={{ marginBottom: "25px" }}>
          The Services are not intended for the use of children under 18 and no
          such person is authorized to use them.
        </p>
        <h5 style={{ marginBottom: "15px" }}>4. Terms of Bidding</h5>
        <h6 style={{ marginBottom: "10px" }}>4.1 Definitions</h6>
        <p style={{ marginBottom: "10px" }}>
          A “Completed Purchase” occurs when (i) you have provided to the Seller
          of the Inventory Products (“Seller”) all of the purchase information
          requested in the Notification (as defined in 4.2.2) in the manner
          specified in such Notification to complete your purchase and (ii) the
          Purchase Price for the Inventory Products has been received as
          specified in the Notification.
        </p>
        <p style={{ marginBottom: "10px" }}>
          “Extended Listing” shall mean any listing where the time to accept
          bids is extended, one or more times, due to a bid being placed within
          the final 0-10 minutes of the listing. Each extension is for a period
          of 1-10 minutes. “Listing Data” shall mean the content on the Platform
          associated with particular Inventory Products, including, but not
          limited to, the description and quantity of the Inventory Products.
          Hanger Stock and Seller shall have the right to modify or correct any
          Listing Data at any time and such modification shall be binding on any
          purchase of any Inventory Products made as a result of a bid placed
          after such modification.
        </p>
        <p style={{ marginBottom: "25px" }}>
          “Promotional Content” shall mean any and all information, materials,
          or content provided or otherwise made available to you by Seller or
          its agents in any medium in connection with these Terms of Bidding,
          including promotional content and Listings displayed on the Platform.
        </p>
        <h6 style={{ marginBottom: "10px" }}>4.2. Listing Process</h6>
        <h6 style={{ marginBottom: "10px" }}>4.2.1. Inventory Products.</h6>
        <p style={{ marginBottom: "10px" }}>
          Inventory Products may consist of customer returns or company stock
          items, some of which may have been previously shipped. The condition
          of the Inventory Products will vary and standard designations
          regarding a product’s condition will be set forth in the Listing Data.
          The Inventory Products are provided to you “as is” for purchase on the
          Platform. The quantity and/or value of actual Inventory Products in
          each lot may vary from the description in the Listing Data. Typically
          such variance is up to 5 percent (5%) less or greater than the number
          set forth in the Listing Data and may include up to 5 percent (5%)
          quantity and/or value of more damaged items than designated as
          “Damaged” in the Listing Data; please see the Seller’s Terms for
          variance information for a particular Listing. Accessories such as
          remote controls, cables and instructions may or may not be included.
        </p>
        <h6 style={{ marginBottom: "10px" }}>4.2.2. Listing Process.</h6>
        <p style={{ marginBottom: "10px" }}>
          Inventory Products will be sold pursuant to the listing process set
          forth in this Section 4.2 (the “Listing”). If you wish to bid on
          Inventory Products, you will be required to enter your bid amount. In
          order to be eligible for the Listing, your bid must be (i) in an
          amount equal to or higher than the bid listed as the minimum opening
          bid and higher than the “current winning bid,” as applicable, (ii) at
          least one bid increment higher than the current bid as set forth on
          the bid page and (iii) placed before the scheduled closing time for
          such Listing (including any additional time added for an Extended
          Listing). If your bid is the highest bid at the conclusion of a
          Listing or, if it is tied for the highest bid and was placed before
          any equivalent bids (the “Winning Bid”) you will be notified by email
          (the “Notification”) at the email address you provided when you
          created your Hanger Stock account (or as subsequently updated by you
          by following instructions on the Platform) that you are the winning
          bidder. The Notification will serve as your official proof of purchase
          and/or official invoice. Any additional formal invoice or proof of
          purchase outside of the original winning notification is not
          available. It is your responsibility to keep your email address
          current and to timely check your email to determine if you are the
          winning bidder for any Listing in which you participated. Neither
          Hyena Auction nor Seller is responsible for the failure of a
          Notification to reach a winning bidder for any reason, including, but
          not limited to, technical problems or other system error.
        </p>
        <h6 style={{ marginBottom: "10px" }}>4.2.3. Winning Bids.</h6>
        <p style={{ marginBottom: "10px" }}>
          If your bid is deemed the Winning Bid at the end of the Listing for
          certain Inventory Products, you agree to promptly purchase such
          Inventory Products by paying the full amount of the Purchase Price and
          any other applicable fees via one of the payment methods outlined in
          the Winning Bid Notification, within 2 business days after the end of
          the Listing. If you fail to register a Completed Purchase, including
          by failing to pay the Purchase Price and any other applicable fees,
          within two (2) business days of when the Notification is sent by Hyena
          Auction or Seller, as applicable, you shall forfeit any right to
          purchase such Inventory Products and Hanger Stock may deactivate your
          account and password so you can no longer access the Platform and, at
          its sole discretion, may choose to (i) offer to sell such Inventory
          Products to the next highest bidder or (ii) post such Inventory
          Products on the Platform for sale in a new Listing. You shall be
          responsible for all taxes, shipping costs and any other expenses
          incurred in connection with your purchase hereunder.
        </p>
        <p style={{ marginBottom: "10px" }}>
          In the event Hanger Stock terminates your account because you either
          failed to pay for any given Winning Bid or violated these or a
          Seller’s Terms, you may be given the chance to pay a reinstatement fee
          in order to reactivate your account. The fee amounts, unless
          superseded by amounts set forth in the Seller’s Terms (which may vary
          on a per-Seller basis), are as follows:
        </p>
        <p style={{ marginBottom: "10px" }}>
          1st Offense: $0-$10,000 Purchase Price: $100 Fee
        </p>
        <p style={{ marginBottom: "10px" }}>
          1st Offense: $10,000+ Purchase Price: $500 Fee
        </p>
        <p style={{ marginBottom: "10px" }}>
          2nd Offense: $0-$10,000 Purchase Price: $500 Fee
        </p>
        <p style={{ marginBottom: "10px" }}>
          2nd Offense: $10,000+ Purchase Price: $1,000 Fee
        </p>
        <p style={{ marginBottom: "25px" }}>3rd Offense: $1,000 Fee</p>
        <h6 style={{ marginBottom: "10px" }}>
          4.2.4. Deactivation; Cancellation.
        </h6>

        <p style={{ marginBottom: "30px" }}>
          Hanger Stock reserves the right, in its sole discretion at any time
          and for any reason, to deactivate your account, reject any offer to
          purchase Inventory Products or suspend or cancel any Listing or
          purchase of Inventory Products, including fulfillment of a purchase
          after completion of a Listing and payment for the Inventory Products.
        </p>

        <h5 style={{ marginBottom: "15px" }}>
          4.3. Conditions to Sale; Payment; Shipping
        </h5>
        <h6 style={{ marginBottom: "10px" }}>
          4.3.1. Canceled Bids and Purchases.
        </h6>
        <p style={{ marginBottom: "10px" }}>
          We reserve the right, at our sole discretion, to refuse or cancel any
          bid or purchase for any reason. By way of example, but not limitation,
          we may cancel your bid or purchase if there are inaccuracies or errors
          in product or bid information, or problems identified by our credit
          and fraud avoidance department. While Sellers strive to provide
          accurate product and bid information, typographical or system errors
          may occur. In the event that bids for Inventory Products are
          incorrectly listed or Inventory Products are listed with incorrect
          information due to an error in quantity or other product information,
          we shall have the right, at our sole discretion, to refuse or cancel
          any purchases placed for such Inventory Products. In the event that we
          must cancel a bid or purchase, we will cancel your bid or purchase and
          notify you by email of such cancellation.
        </p>
        <h6 style={{ marginBottom: "10px" }}>4.3.2. Payment Terms.</h6>
        <p style={{ marginBottom: "10px" }}>
          You are responsible for paying all fees that you owe to Hanger Stock
          or Sellers (See 4.2.3). You are also solely responsible for collecting
          and/or paying any applicable taxes for any purchases or sales you make
          through our Services. In the event the Platform offers tools or
          suggestions to assist with the calculation of any value-added tax or
          VAT Hanger Stock, makes no guarantee, representation or warranty as to
          the accuracy of any such amount, and it is solely your responsibility
          to determine the appropriate tax. Some countries may refer to VAT
          using other terms, e.g. Goods and Services Tax (GST), but we will just
          refer to VAT, GST, and any local sales taxes collectively as “VAT.”
        </p>
        <p style={{ marginBottom: "10px" }}>
          Hanger Stock may require you to add a payment method (Credit Cards,
          ACH in USA, BACS in the UK, EFT in Canada, and SEPA in the EU) to your
          Hanger Stock account that can be used for paying the Purchase Price,
          taxes, service fees and termination fees described in 4.2.3. The
          payment method associated with your Hyena Auction account can be used
          for any marketplace powered by Hanger Stock unless the Sellers or
          Hanger Stock has restricted the ability to use certain payment methods
          for certain transactions, as will be set forth in the Listing Data
          and/or Notification. See link here for complete list of marketplaces
          powered by Hanger Stock. You shall submit the Purchase Price and any
          other associated fees in accordance with the payment terms set forth
          in the Listing Data, Notification and on the Platform. The Seller or
          Hanger Stock (as applicable) may revise the payment terms from time to
          time in its sole and absolute discretion upon notice to you, which
          notice may be via the Listing Data and/or the Notification. Your
          transaction may be eligible for payment via a virtual collection bank
          account(s) owned by Payoneer and allocated to Hanger Stock. When the
          payments are made to the virtual bank accounts owned by Payoneer,
          Hanger Stock shall act as a technical service provider delivering
          Payoneer with the necessary data for the allocation of funds to
          sellers. Payment will be required in cleared funds before a Seller
          ships any Inventory to you.
        </p>

        <h6 style={{ marginBottom: "10px" }}>4.3.3. Shipping.</h6>
        <p style={{ marginBottom: "10px" }}>
          Please refer to our Shipping Policy, which is incorporated into these
          Terms of Use by this reference, for information on the various options
          available to Sellers for shipping Inventory Products to Buyers. Buyer
          acknowledges and agrees to be bound by all such shipping terms set
          forth in the Shipping Policy. In no event will Hyena Auction be liable
          for loss of or damage to Inventory Products during shipping. Nor will
          Hyena Auction have any responsibility for transportation arranged
          directly by Seller or Buyer.
        </p>
        <h6 style={{ marginBottom: "10px" }}>
          4.3.4. Identification of Seller.
        </h6>
        <p style={{ marginBottom: "25px" }}>
          You acknowledge that the information regarding the Purchase Price and
          any particular sale are confidential to Hyena Auction and Seller.
        </p>
        <h5 style={{ marginBottom: "10px" }}>
          4.4 Promotional Content Disclaimer
        </h5>
        <p style={{ marginBottom: "25px" }}>
          YOU AGREE AND ACKNOWLEDGE THAT NEITHER SELLER NOR HANGER STOCK MAKE
          ANY GUARANTY OF THE ACCURACY, CORRECTNESS OR COMPLETENESS OF ANY
          PROMOTIONAL CONTENT AND ARE NOT RESPONSIBLE FOR: (I) ANY ERRORS OR
          OMISSIONS ARISING FROM THE USE OF ANY THEREOF; (II) ANY FAILURES,
          DELAYS OR INTERRUPTIONS IN THE DELIVERY OF ANY PROMOTIONAL CONTENT
          CONTAINED WITH THE PLATFORM; (III) LOSSES OR DAMAGES ARISING FROM THE
          USE OF THE PROMOTIONAL CONTENT PROVIDED BY THE PLATFORM; (IV) ANY
          CONDUCT BY YOU IN CONNECTION WITH THE PLATFORM; OR (V) ANY PROMOTIONAL
          CONTENT OR PRODUCTS PROVIDED THROUGH OR IN CONJUNCTION WITH THE
          PLATFORM.
        </p>

        <h5 style={{ marginBottom: "10px" }}>
          5. User Submissions, Feedback and Information
        </h5>
        <p style={{ marginBottom: "10px" }}>
          You acknowledge and agree that any submission, feedback, comments or
          suggestions you may provide regarding the Services either directly or
          indirectly (for example, through the use on a third-party social media
          site of a company-designated hashtag) (collectively, “Submissions”) is
          non-confidential and non-proprietary, shall be treated as public
          information, may be shared with others on other sites and platforms
          and is submitted by you in compliance with these Terms of Use.
          Submissions that constitute feedback, comments or suggestions will be
          the sole and exclusive property of Hyena Auction and you hereby
          irrevocably assign to us all of your right, title and interest in and
          to all such Submissions, and Hyena Auction shall have an unrestricted,
          irrevocable, world-wide, royalty-free right to use, communicate,
          reproduce, publish, display, distribute and exploit such Submissions
          in any manner it chooses. With respect to all other Submissions, you
          hereby grant Hanger Stock an irrevocable, worldwide and perpetual
          license to use such Submissions as contemplated in these Terms of Use.
        </p>
        <p style={{ marginBottom: "10px" }}>
          You agree that any Submission that is a review of a seller, (“Review”)
          shall not contain any material that is, in the sole and absolute
          discretion of Hanger Stock, inappropriate, defamatory, false, obscene,
          violent, unlawful, threatening or otherwise objectionable
          (hereinafter, “Prohibited Content”). Notwithstanding the generality of
          the foregoing, Prohibited Content includes, without limitation, any
          content that (i) violates these Terms of Use, (ii) contains personal
          information of any person other than yourself, (iii) references or
          threatens legal actions, (iv) attempts to artificially raise or lower
          a seller‘s ratings, (v) relates to variables outside of the seller‘s
          control, and (vi) solicits business outside of the Hyena Auction
          platform. Posting of any Prohibited Content, in addition to any and
          all other rights and remedies available to Hanger Stock, may result in
          account suspension or termination. Hyena Auction may refuse or remove
          a Review in its sole discretion and without notice to you. However,
          Hyena Auction shall have no obligation to monitor Reviews, and you
          agree that neither Hyena Auction nor its affiliates, employees, or
          agents will be liable for Reviews or any loss or damage resulting from
          Reviews. Notwithstanding the foregoing, Hyena Auction reserves the
          right to monitor all activity conducted over the Platform and
          anticipates that it will do so from time to time.
        </p>
        <p style={{ marginBottom: "25px" }}>
          Your provision of a Submission constitutes a warranty and indemnity
          that you have sufficient license and/or other rights in the content to
          allow all desired use by Hyena Auction. You consent to the use by
          Hyena Auction of the information and that it is submitted in
          compliance with all applicable laws. You are responsible for any
          Submission you provide and for any consequences arising therefrom.
        </p>

        <h5 style={{ marginBottom: "15px" }}>6. Copyright Policy</h5>
        <p style={{ marginBottom: "25px" }}>
          Hanger Stock respects the intellectual property rights of others. If
          you believe that any content appearing on the Platform is being used
          in a manner that constitutes copyright infringement, please follow the
          procedures set forth in our Hanger Stock Solutions Copyright
          Infringement Policy.
        </p>
        <h5 style={{ marginBottom: "15px" }}>
          7. References to Third Parties; Links to Other Sites
        </h5>
        <p style={{ marginBottom: "25px" }}>
          The Services may contain references to third parties or links to other
          independent third-party websites (“Linked Sites”). These Linked Sites
          are provided solely as a convenience to our visitors. Such Linked
          Sites are not under Hanger Stock’s control, and Hanger Stock is not
          responsible for and does not endorse the content of such Linked Sites,
          including any information or materials contained on such Linked Sites.
        </p>

        <h5 style={{ marginBottom: "15px" }}>
          8. Disclaimer; Limitation of Liability; Indemnity
        </h5>
        <p style={{ marginBottom: "10px" }}>
          THE SERVICES, ALL CONTENT AND INVENTORY OFFERED THROUGH THE SERVICES
          ARE PROVIDED “AS IS, AS AVAILABLE.” IN ADDITION, AND TO THE FULLEST
          EXTENT PERMITTED BY LAW, HANGER STOCK DISCLAIMS ALL WARRANTIES,
          EXPRESS OR IMPLIED, INCLUDING ANY WARRANTIES OF ACCURACY,
          NON-INFRINGEMENT, MERCHANTABILITY AND FITNESS FOR A PARTICULAR
          PURPOSE. Hyena Auction DOES NOT WARRANT THAT THE SERVICES WILL BE
          UNINTERRUPTED OR ERROR FREE. TO THE FULLEST EXTENT PERMITTED BY
          APPLICABLE LAW, Hyena Auction SHALL HAVE NO LIABILITY FOR ANY DAMAGES
          OR LOSSES OF ANY KIND (INCLUDING, BUT NOT LIMITED TO, LOSS OF MONEY,
          GOODWILL OR REPUTATION, PROFITS, OTHER INTANGIBLE LOSSES, OR ANY
          SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES RESULTING DIRECTLY
          OR INDIRECTLY FROM THE FOLLOWING, EVEN IF Hyena Auction HAS BEEN
          ADVISED OF THE POSSIBILITY OF SUCH DAMAGES OR LOSSES:
        </p>
        <p style={{ marginBottom: "10px" }}>
          • ANY INFORMATION OR CONTENT YOU PROVIDE (DIRECTLY OR INDIRECTLY)
          USING THE SERVICES;
        </p>
        <p style={{ marginBottom: "10px" }}>
          • YOUR USE OF OR YOUR INABILITY TO USE THE SERVICES;
        </p>
        <p style={{ marginBottom: "10px" }}>
          • YOUR PURCHASE OF, USE OF, OR INABILITY TO USE INVENTORY, INCLUDING
          BUT NOT LIMITED TO ANY INJURY OR DEATH INCURRED
        </p>
        <p style={{ marginBottom: "10px" }}>
          • USE OR INABILITY TO USE INVENTORY;
        </p>
        <p style={{ marginBottom: "10px" }}>
          • DELAYS OR DISRUPTIONS IN PROVISION OF THE SERVICES;
        </p>
        <p style={{ marginBottom: "10px" }}>
          • VIRUSES OR OTHER MALICIOUS SOFTWARE OBTAINED BY ACCESSING OR LINKING
          TO THE SERVICES;
        </p>
        <p style={{ marginBottom: "10px" }}>
          • GLITCHES, BUGS, ERRORS, OR INACCURACIES OF ANY KIND IN THE SERVICES;
        </p>
        <p style={{ marginBottom: "10px" }}>
          • DAMAGE TO YOUR HARDWARE DEVICE FROM THE USE OF THE SERVICES;
        </p>
        <p style={{ marginBottom: "10px" }}>
          • THE CONTENT, ACTIONS, OR INACTIONS OF THIRD PARTIES, INCLUDING AS
          RELATED TO INVENTORY LISTED ON THE SERVICES;
        </p>
        <p style={{ marginBottom: "10px" }}>
          • A SUSPENSION, DEACTIVATION OR OTHER ACTION TAKEN WITH RESPECT TO
          YOUR ACCOUNT OR PASSWORD.
        </p>
        <p style={{ marginBottom: "10px" }}>
          IN NO EVENT SHALL Hyena Auction’S LIABILITY FOR ANY AND ALL LOSSES OR
          DAMAGES RELATED TO THE USE OF THE SERVICES, OR THE BIDDING UPON OR
          PURCHASE OF ANY INVENTORY EXCEED THE PURCHASE PRICE ACTUALLY PAID BY
          BUYER FOR THE INVENTORY AT ISSUE. THIS LIMITATION OF LIABILITY SHALL
          SURVIVE EACH PURCHASE TRANSACTION AND SHALL APPLY NOTWITHSTANDING THE
          FAILURE OF ESSENTIAL PURPOSE OF ANY LIMITED REMEDY HEREIN.
        </p>
        <p style={{ marginBottom: "10px" }}>
          The above disclaimer applies to any damages, liability or injuries,
          whether for breach of contract, tort, negligence or any other cause of
          action. BY ACCESSING THE SERVICES, YOU UNDERSTAND THAT YOU MAY BE
          WAIVING RIGHTS WITH RESPECT TO CLAIMS THAT ARE AT THIS TIME UNKNOWN OR
          UNSUSPECTED. ACCORDINGLY, YOU AGREE TO WAIVE THE BENEFIT OF ANY LAW,
          INCLUDING, TO THE EXTENT APPLICABLE, CALIFORNIA CIVIL CODE SECTION
          1542, THAT OTHERWISE MIGHT LIMIT YOUR WAIVER OF SUCH CLAIMS.
        </p>
        <p style={{ marginBottom: "10px" }}>
          Some jurisdictions do not allow the exclusion of certain warranties or
          the exclusion or limitation of liability for consequential or
          incidental damages, so these limitations may not apply to you.
        </p>
        <p style={{ marginBottom: "25px" }}>
          You agree to indemnify, defend and hold Hanger Stock, its affiliates
          and its and their respective officers, directors, agents, and
          employees (the “Indemnified Parties”) harmless from any demands, loss,
          liability, damages, claims, costs or expenses (including attorneys’
          fees), made against any Indemnified Party due to or arising out of or
          in connection with (1) your access to or use of the Services; (2) your
          violation of these Terms of Use or any applicable law or regulation,
          (3) your violation of any rights of any third party; (4) your
          negligence or intentional misconduct, or (5) any disputes or issues
          between you and any third party. This indemnity obligation shall
          survive each purchase transaction you make on the Platform. Hanger
          Stock shall have the right to participate in the defense of any such
          claim, at its own cost. You may not settle or negotiate any claim that
          results in liability to, or imposes any obligation upon, Hyena Auction
          , financial or otherwise, without Hanger Stock ‘s written consent.
        </p>

        <h5 style={{ marginBottom: "15px" }}>
          9. Violation of These Terms of Use
        </h5>
        <p style={{ marginBottom: "10px" }}>
          Hanger Stock may disclose any information we have about you (including
          your identity) if we determine that such disclosure is necessary in
          connection with any investigation or complaint regarding your use of
          the Services, or to identify, contact or bring legal action against
          someone who may be causing injury to or interference with (either
          intentionally or unintentionally) Hanger Stock’s rights or property,
          or the rights or property of visitors to or users of the Services.
          Hanger Stock reserves the right at all times to disclose any
          information that Hanger Stock deems necessary to comply with any
          applicable law, regulation, legal process or governmental request.
          Hanger Stock also may disclose your information when Hanger Stock
          determines that applicable law requires or permits such disclosure,
          including exchanging information with other companies and
          organizations for fraud protection purposes.
        </p>
        <p style={{ marginBottom: "25px" }}>
          You agree that Hanger Stock may, in its sole discretion, without prior
          notice and to the extent applicable, terminate your access to the
          Services, deactivate your account and/or block your future access to
          the Services if we determine that you have violated these Terms of Use
          or other agreements or guidelines which may be associated with your
          use of the Services. Upon any termination of your access to the
          Services, you must (a) immediately discontinue use of the Platform and
          Services, and (b) promptly destroy all Content downloaded or otherwise
          copied from the Platform, as well as all copies of such materials,
          whether made under the Terms of Use or otherwise. You also agree that
          any violation by you of these Terms of Use will cause irreparable harm
          to Hanger Stock for which monetary damages would be inadequate, and
          you consent to Hanger Stock obtaining any injunctive or equitable
          relief that Hanger Stock deems necessary or appropriate in such
          circumstances. These remedies are in addition to any other remedies
          Hanger Stock may have at law or in equity.
        </p>

        <h5 style={{ marginBottom: "15px" }}>
          10. Governing Law; Dispute Resolution
        </h5>
        <p style={{ marginBottom: "10px" }}>
          HANGER STOCK SUPPLY USERS: IF YOU BID UPON, PURCHASE, OFFER FOR SALE,
          OR SELL INVENTORY THROUGH Hanger Stock SUPPLY SITE, ANY CLAIM OR
          DISPUTE THAT ARISES OUT OF OR RELATES TO THE Hanger Stock SUPPLY
          TRANSACTIONS, WHETHER BETWEEN YOU AND Hanger Stock OR BETWEEN YOU AND
          A BUYER OR SELLER (AS APPLICABLE), SHALL BE RESOLVED IN ACCORDANCE
          WITH THE DISPUTE RESOLUTION PROCEDURES SET FORTH IN THE Hanger Stock
          SUPPLY ALTERNATIVE DISPUTE RESOLUTION POLICY LOCATED AT
          https://bstocksupply.com/adr/ WHICH IS INCORPORATED HEREIN.
        </p>
        <p style={{ marginBottom: "10px" }}>
          Unless superseded by governing law and dispute resolution provisions
          set forth in the Seller’s Terms (which may vary on a per-Seller basis)
          or the Hanger Stock Supply Alternative Dispute Resolution policy
          pursuant to the foregoing paragraph, the terms of this Section 10
          shall apply as follows: These Terms of Use will be construed in
          accordance with and governed exclusively by the laws of the United
          States and the State of California applicable to agreements made among
          California residents and to be performed wholly within such
          jurisdiction, regardless of such parties’ actual domiciles excluding:
          (1) its conflicts of law principles; and (2) the United Nations
          Convention on Contracts for the International Sale of Goods or any
          local laws implementing such convention in any applicable
          jurisdiction.
        </p>
        <p style={{ marginBottom: "10px" }}>
          PLEASE READ THE FOLLOWING SECTION CAREFULLY BECAUSE IT REQUIRES YOU TO
          ARBITRATE CERTAIN DISPUTES AND CLAIMS WITH Hanger Stock AND LIMITS THE
          MANNER IN WHICH YOU CAN SEEK RELIEF FROM US.
        </p>
        <p style={{ marginBottom: "10px" }}>
          You agree that all such disputes or claims that have arisen, or may
          arise, between you and Hanger Stock arising out of or relating to
          these Terms of Use shall be resolved exclusively through final and
          binding arbitration, rather than in court. Alternatively, you may
          assert your claims in small claims court, if your claims qualify and
          so long as the matter remains in such court and advances only on an
          individual (non-class, non-representative) basis. The Federal
          Arbitration Act governs the interpretation and enforcement of this
          agreement to arbitration. Arbitration is more informal than a lawsuit
          in court. Arbitration uses a neutral arbitrator instead of a judge or
          jury, and court review of an arbitration award is very limited.
          However, an arbitrator can award the same damages and relief on an
          individual basis that a court can award to an individual. An
          arbitrator should apply the terms of these Terms of Use and any
          relevant agreement between the parties as a court would. All issues
          are for the arbitrator to decide, except that issues relating to
          arbitrability, the scope or enforceability of this agreement to
          arbitrate, or the interpretation of these Terms of Use, shall be for a
          court of competent jurisdiction to decide.
        </p>
        <p style={{ marginBottom: "10px" }}>
          The arbitration will be conducted by the American Arbitration
          Association (“AAA”) under its Commercial Arbitration Rules, as
          modified by these Terms of Use. The AAA’s rules are available at
          www.adr.org or by calling the AAA at 1-800-778-7879. The use of the
          word “arbitrator” in this provision shall not be construed to prohibit
          more than one arbitrator from presiding over an arbitration; rather,
          the AAA’s rules will govern the number of arbitrators that may preside
          over an arbitration conducted under these Terms of Use.
        </p>
        <p style={{ marginBottom: "10px" }}>
          A party who intends to seek arbitration must first send a written
          notice of the dispute (“Notice”) to all other parties by certified
          U.S. Mail or by Federal Express (signature required) or, only if any
          other party has not provided a postal address, then by electronic
          mail, with a copy to Hanger Stock at disputes@bstock.com. The Notice
          must include a description of the nature and basis of the claims the
          party is asserting and the relief sought. The parties shall thereafter
          make good faith efforts to resolve the dispute directly, but if the
          parties do not reach an agreement to do so within thirty (30) days
          after the Notice is received, any party may commence an arbitration
          proceeding. A form for initiating arbitration proceedings is available
          on the AAA’s site at www.adr.org. In addition to filing this form with
          the AAA in accordance with its rules and procedures, you may send a
          copy to Hanger Stock at disputes@bstock.com. Any settlement offer made
          by a party, if any, shall not be disclosed to the arbitrator.
        </p>
        <p style={{ marginBottom: "10px" }}>
          he arbitration hearing shall be held in the county in which the
          initiating party resides or at another mutually agreed location. If
          the value of the relief sought is $10,000 or less, any party may elect
          to have the arbitration conducted by telephone or based solely on
          written submissions, which election shall be binding on the parties
          subject to the arbitrator’s discretion to require an in-person
          hearing, if the circumstances warrant. In cases where an in-person
          hearing is held, you may attend by telephone, unless the arbitrator
          requires otherwise. The arbitrator will decide the substance of all
          claims in accordance with applicable law, including recognized
          principles of equity, and will honor all claims of privilege
          recognized by law. The arbitrator shall not be bound by rulings in
          prior arbitrations involving different parties. The arbitrator’s award
          shall be final and binding and judgment on the award rendered by the
          arbitrator may be entered in any court having jurisdiction thereof.
          Payment of all filing, administration and arbitrator fees will be
          governed by the AAA’s rules, unless otherwise stated in these Terms of
          Use.
        </p>
        <p style={{ marginBottom: "25px" }}>
          No Class Arbitrations, Class Actions or Representative Actions. Any
          dispute will be resolved solely through individual arbitration and
          will not be brought as a class arbitration, class action or any other
          type of representative proceeding. There will be no class arbitration
          or arbitration in which an individual attempts to resolve a dispute as
          a representative of another individual or group of individuals.
          Further, a dispute cannot be brought as a class or other type of
          representative action, whether within or outside of arbitration, or on
          behalf of any other individual or group of individuals. Jurisdiction.
          To the extent that any lawsuit or court proceeding is permitted under
          these Terms of Use, to the fullest extent permitted by law you agree
          to submit to the personal and exclusive jurisdiction of the state
          courts and federal courts located in the State of California for the
          purpose of litigating all such disputes. You also waive your rights to
          a jury trial. Time Limit for Claims. Any claim under these Terms of
          Use must be brought within one (1) year after the cause of action
          arises, or such claim or cause of action is barred. You agree to the
          admissibility of computer records and electronic evidence in any
          dispute herein. Severability of Dispute Resolution; Arbitration. In
          the event the provisions in this Dispute Resolution Section are held
          invalid or unenforceable, then this Dispute Resolution Section, in its
          entirety, will cease to apply, and the parties will not be obligated
          to arbitrate any Disputes.
        </p>

        <h5 style={{ marginBottom: "15px" }}>
          11. Users Outside of the United States; Prohibited Parties
        </h5>
        <p style={{ marginBottom: "10px" }}>
          Hyena Auction and the Services are operated from the United States.
          Although the Services are accessible worldwide, not all features,
          products or services discussed, referenced, provided or offered
          through or on the Services are available to all persons or in all
          geographic locations, permitted to be used by all persons or entities
          (whether inside or outside the United States), or appropriate or
          available for use outside the United States. If you choose to access
          the Services from outside the United States or to use the Platform to
          transact with parties located outside the United States, you do so on
          your own initiative and at your own risk, and you are solely
          responsible for complying with applicable local laws. Further, by your
          use of the Services, you represent, warrant and covenant that (a)
          neither you nor any person or entity with which you transact business
          via the Platform, are named on any U.S. government list of persons or
          entities prohibited from receiving exports or with which Users are
          prohibited from transacting business; (b) you will not re-export any
          goods or services to persons or entities prohibited from receiving
          exports; and (c) you shall not transact with any person or entity in
          violation of any U.S. export embargo, prohibition or restriction.
        </p>
        <p style={{ marginBottom: "25px" }}>
          The parties declare that they have required that these Terms of Use
          and all documents related hereto, either present or future, be drawn
          up in the English language only. Les parties déclarent par les
          présentes qu’elles exigent que cette entente et tous les documents y
          afferents, soit pour le present ou le future, soient rédigés en langue
          anglaise seulement.
        </p>

        <h5 style={{ marginBottom: "15px" }}>12. Miscellaneous</h5>
        <p style={{ marginBottom: "10px" }}>
          You may preserve these Terms of Use in written form by printing it for
          your records, and you waive any other requirement that these Terms of
          Use be evidenced by a written document. You may not use or export or
          re-export any Content or any copy or adaptation of such Content, or
          any product or service offered on the Services, in violation of these
          Terms of Use or any applicable laws or regulations, including without
          limitation United States export laws and regulations.
        </p>
        <p style={{ marginBottom: "10px" }}>
          If any provision herein is held to be invalid or unenforceable for any
          reason, the remaining provisions will continue in full force without
          being impaired or invalidated in any way. The parties agree to replace
          any invalid provision with a valid provision that most closely
          approximates the intent and economic effect of the invalid provision.
          Headings and the division of these Terms of Use into separate
          sections, subsections and/or exhibits are for reference purposes only
          and in no way define, limit, construe or describe the scope or extent
          of these Terms of Use. These Terms of Use, together with the Privacy
          Policy and any other legal notices published by Hyena Auction
          constitute the entire agreement between you and Hyena Auction with
          regard to your use of the Services; provided, however, that if you
          have entered into a separate agreement for Services with a Seller,
          (“Seller’s Terms”), except where expressly provided in these Terms of
          Use that the Seller’s Terms supersede the provisions of these Terms of
          Use, the provisions of these Terms of Use will control in the event of
          any conflict between these Terms of Use and the Seller Terms. Hyena
          Auction ’s failure to insist on or enforce strict performance of these
          Terms of Use shall not be deemed a waiver by Hyena Auction of any
          provision or any right it has to enforce these Terms of Use. Any such
          waiver must be in writing in order to be effective.
        </p>
        <p style={{ marginBottom: "25px" }}>
          Neither Hanger Stock nor a Seller shall be liable to you for failure
          or delay in performance hereunder due in whole or in part to an act of
          God, strike, lockout or other labor dispute, civil commotion,
          sabotage, fire, flood, explosion, acts of any government, unforeseen
          shortages or unavailability of fuel, power, transportation, or
          supplies, and any other causes which are not within Hyena Auction’s or
          Seller’s reasonable control, whether or not of the kind specifically
          enumerated above.
        </p>

        <h5 style={{ marginBottom: "15px" }}>13. Modifications to Terms</h5>
        <p style={{ marginBottom: "10px" }}>
          We reserve the right, from time to time, with or without notice to
          you, to change these Terms of Use in our sole and absolute discretion.
          If we make material changes to these Terms of Use, we will notify you
          with an in-app message, by email, or by means of a notice on our
          Services. The most current version of these Terms of Use will
          supersede all previous versions and can be reviewed by clicking on
          “Terms of Use” located at the bottom of the pages of our sites. Your
          continued use of the Services following the posting of changes
          indicates your agreement to and acceptance of the changes. We will
          indicate the date on which these Terms of Use were last changed at the
          beginning of these Terms of Use.
        </p>

        <h5 style={{ marginBottom: "15px" }}>
          14. Questions and Contact Information
        </h5>
        <p style={{ marginBottom: "10px" }}>
          Hyena Auction Solutions, Inc. is located at:
        </p>
        <p style={{ marginBottom: "10px" }}>870 Crenshaw Blvd, #306</p>
        <p style={{ marginBottom: "10px" }}>Los Angeles, CA 90005</p>
        <p style={{ marginBottom: "45px" }}>
          Please contact us if you have any questions about our Terms of Use.
          You may contact us by sending correspondence to the foregoing address
          or by emailing us at sales@liqsession.com
        </p>
        <h2 style={{ marginBottom: "10px", color: "#599f22", fontWeight: 700 }}>
          Terms of Purchase
        </h2>
        <p style={{ marginBottom: "25px" }}>(Last Revised: April 6, 2020)</p>
        <p style={{ marginBottom: "25px" }}>
          These Terms of Purchase are an ongoing contract between you on the one
          hand, and each seller of Inventory (defined below) which you bid upon
          or purchase (“Seller”) and Hyena Auction solutions,. (“Hyena
          Auction”), provider of the online marketplace located at
          http://www.huenaauction.com (the “Site”) and related services (the
          “Services”), on the other hand. These Terms of Purchase are in
          addition to the Hyena Auction Terms of Use. By placing a bid or
          purchasing Inventory, you agree to be bound by these Terms of Purchase
          as well as the Terms of Use. If you do not agree to these Terms of
          Purchase and the Hanger Stock Terms of Use, you may not bid upon or
          purchase Inventory. PLEASE READ SECTION 11 (DISPUTES) CAREFULLY. IT
          AFFECTS YOUR RIGHTS AND WILL HAVE A SUBSTANTIAL IMPACT ON HOW CLAIMS
          OR DISPUTES WILL BE RESOLVED.
        </p>

        <h5 style={{ marginBottom: "15px" }}>1. Nature of Relationships</h5>
        <p style={{ marginBottom: "10px" }}>
          Hyena Auction is an intermediary that provides a platform, including
          the Site and Services, through which Buyers may purchase Inventory
          from Sellers Hyena Auction does not sell Inventory, and is not a party
          to any purchase and sale transaction, but merely provides the platform
          through which a purchase and sale may be transacted between a Buyer
          and Seller Hyena Auction does not inspect, and makes no
          representations or warranties regarding, any Inventory. Further, Hyena
          Auction does not recommend or endorse any Seller or Buyer and makes no
          representations or warranties regarding any Seller or Buyer. You
          should exercise caution and use your independent judgment before
          bidding upon or purchasing Inventory.
        </p>

        <h5 style={{ marginBottom: "15px" }}>2. Definitions</h5>
        <p style={{ marginBottom: "10px" }}>
          2.1 “Binding Shipping” means a shipping option whereby Seller has
          elected to require Buyers to use a designated carrier to ship
          purchased Inventory, at shipping rates determined by the carrier.
        </p>
        <p style={{ marginBottom: "10px" }}>
          2.1 “Buyer” or ”you” or ”your” means the individual who purchases
          Inventory from a Seller through the Site under the terms described
          herein, and the separate legal entity that such individual represents
          in making the purchase, if applicable.
        </p>
        <p style={{ marginBottom: "10px" }}>
          2.2 “Buyer’s Premium” means an amount equal to ten percent (10%) of
          the Winning Bid Amount on each completed Sale of Inventory.
        </p>
        <p style={{ marginBottom: "10px" }}>
          2.3 A ”Completed Purchase” occurs when the Purchase Price for the
          Inventory has been received in the Hanger Stock account, on behalf of
          Seller, as specified in the Email Invoice.
        </p>
        <p style={{ marginBottom: "10px" }}>
          2.4 “Email Invoice” means the invoice sent to you by Hyena Auction via
          email as a result of your bid being the winning bid for Inventory,
          which shall include the winning bid amount, shipping and handling
          charges (in some cases), applicable taxes and Buyer’s Premium.
        </p>
        <p style={{ marginBottom: "10px" }}>
          2.5 “Extended Bidding” shall mean the circumstance where the closing
          time of a Listing is extended by some number of minutes (“X”) as a
          result of a bid being placed within a certain number of minutes (“Y”)
          prior to the current closing time of a Listing. The values of X and Y
          can differ from Listing to Listing. For example, if a bid is placed in
          the final Y minutes of the original end time for a particular Listing,
          the bidding period will be extended by X minutes. If a bid is then
          placed within Y minutes before the new end time, the bidding period
          will be extended again for X minutes until there are no new bids
          placed for that auction asset for Y minutes.
        </p>
        <p style={{ marginBottom: "10px" }}>
          2.6 “Inventory” means a Seller’s products that are available for
          purchase on the Site under the terms described herein.
        </p>
        <p style={{ marginBottom: "10px" }}>
          2.7 “Listing” means the content on the Site associated with particular
          Inventory, including, but not limited to, the description and quantity
          of the Inventory. Sellers and Hyena Auction shall have the right to
          modify or correct any Listing at any time prior to the end time of the
          Listing and, unless a cancellation is made by Hanger Stock or Seller
          pursuant to Section 4.2, such modification shall be binding on any
          purchase of any Inventory placed after such modification has been
          made.
        </p>
        <p style={{ marginBottom: "10px" }}>
          2.8 “Promotional Content” means any and all information, service or
          content provided by Sellers, Hyena Auction or their respective agents,
          in any medium, in connection with these Terms of Purchase, including
          promotional content and Listings to be displayed on the Site.
        </p>
        <p style={{ marginBottom: "10px" }}>
          2.9 “Purchase Price” means, with respect to any Inventory, the Winning
          Bid Amount, Buyer’s Premium and all applicable shipping and handling
          charges and taxes.
        </p>
        <p style={{ marginBottom: "25px" }}>
          2.10 “Winning Bid Amount” means, with respect to any Inventory, the
          highest bid placed for such Inventory at the final closing time for
          the auction of such Inventory. The Winning Bid Amount does not include
          shipping charges (if applicable), taxes or Buyer’s Premium, the
          payment for each of which Buyer shall remain liable for.
        </p>

        <h5 style={{ marginBottom: "15px" }}>3. Sale Process</h5>
        <p style={{ marginBottom: "10px" }}>
          3.1 Inventory. Inventory offered through the Site exists in different
          conditions, including new, previously used and refurbished, or
          previously used and “as-is”, including defective. The specific
          condition of any particular Inventory should be disclosed by Seller
          within the Listing for such Inventory.
        </p>
        <p style={{ marginBottom: "10px" }}>
          3.2 Sale Process. Hyena Auction will be your primary point of contact
          regarding all Listing, bidding, payment, and customer service issues.
          Inventory will be sold pursuant to the process set forth in this
          Section 3 (the “Sale”). If you wish to bid on Inventory, you will be
          required to enter your bid amount. Your bid must be (i) in an amount
          equal to or greater than the “next bid required” and (ii) placed
          before the scheduled closing time for such Listing (including any
          additional time added for Extended Bidding). If your bid is deemed the
          winning bid you will receive an Email Invoice at the email address you
          provided when you registered for your account, as updated by you from
          time to time by following instructions on the Site. It is your
          responsibility to keep your email address current and to timely check
          your email to determine if you are the winning bidder for any
          Inventory for which you placed a bid. Neither Sellers nor Hanger Stock
          are responsible for the failure of an Email Invoice to reach you for
          any reason, including, but not limited to, technical problems or other
          system error.
        </p>
        <p style={{ marginBottom: "10px" }}>
          3.3 Winning Bids. If your bid is deemed the winning bid at the end of
          the Sale, you agree to remit payment for such Inventory within 48
          hours of your receipt of the Email Invoice, unless the Listing or the
          Email Invoice indicates a later time at which payment is due. Your
          payment will be made to Hyena Auction, on behalf of Seller, not to
          Seller directly. If you fail to pay for the Inventory by the deadline
          for payment, you shall forfeit any right to purchase such Inventory
          and. Hyena Auction may deactivate your account and password so you can
          no longer place bids on the Site and, at their sole discretion, may
          choose to (i) contact the next highest bidder in the Sale for such
          Inventory and offer to sell such Inventory to such bidder at such
          bidder’s bid price or (ii) post such Inventory on the Site for sale in
          a new Listing.
        </p>
        <p style={{ marginBottom: "10px" }}>
          3.4 Reserve Price. Your bid must meet or exceed the reserve price, if
          any. The reserve price, if any, remains confidential until a bid
          exceeds such amount.
        </p>

        <h5 style={{ marginBottom: "15px" }}>4. Conditions to Sale; Payment</h5>
        <p style={{ marginBottom: "10px" }}>
          4.1 Purchase Price. In consideration for your full payment of the
          Purchase Price to. Hyena Auction, as the limited payment agent of
          Seller, in the manner and by the deadlines set forth in these Terms of
          Purchase, Seller hereby agrees to sell to you such Inventory. Nothing
          in these Terms of Purchase or any Listing shall otherwise obligate
          Seller or. Hyena Auction to sell Inventory to you. You shall be solely
          responsible for all taxes, shipping and handling charges and any other
          expenses incurred in connection with your purchase hereunder.
        </p>
        <p style={{ marginBottom: "10px" }}>
          4.2 Cancellation. Please note that there may be certain bids and/or
          purchases that Sellers or.Hyena Auction are unable to accept and must
          cancel. Situations that may result in your bid or purchase being
          canceled include, but are not limited to, inaccuracies or errors in
          product or bid information contained in Listings, or problems
          identified by. Hyena Auction’s credit and fraud avoidance departments.
          While Sellers and. Hyena Auction strive to provide accurate product
          and bid information, typographical or system errors may occur. Sellers
          or. Hyena Auction have the right, at our sole discretion, to refuse or
          cancel any purchases of Inventory for any reason. In the event that a
          bid or purchase must be refused or cancelled, we will notify you by
          email of such refusal or cancellation.
        </p>
        <p style={{ marginBottom: "25px" }}>
          4.3 Payment Terms. You shall submit the Purchase Price to. Hyena
          Auction, on behalf of the Seller, under the payment terms set forth
          herein and in the applicable Listing and Email Invoice. Hyena Auction
          will determine in its discretion if your payment is complete. Once it
          is complete. Hyena Auction will transmit a paid invoice email (“Paid
          Invoice”) to you and the Inventory’s Seller or custodian, which Paid
          Invoice will serve as an authorization to release the Inventory to
          you. Hyena Auction may revise the payment terms from time to time in
          its sole and absolute discretion upon notice to you; provided,
          however, that any change to payment terms will not be effective for
          any then-pending Sale but will only be effective for the next Sale
          subsequent to such notice. Upon acceptance of such Purchase Price and
          fulfilment of any other applicable conditions to sale, Seller will
          sell you the Inventory and shall make such Inventory available for
          removal by you or your agents in the manner set forth in Section 5
          below.
        </p>

        <h5 style={{ marginBottom: "15px" }}>
          5. Removal and Acceptance of Inventory
        </h5>
        <p style={{ marginBottom: "10px" }}>
          5.1 Title; Risk of Loss. Title to the Inventory shall remain with
          Seller until you have paid the Purchase Price and you or your agent
          take possession of the Inventory. You expressly acknowledge and agree
          that risk of loss and liability for the Inventory shall pass to you
          upon pickup by you or a carrier appointed by you (if you have the
          option to pick up the Inventory or use your own carrier and have
          elected to do so) or a carrier appointed by Seller (if the Inventory
          is subject to Binding Shipping or the Seller otherwise arranges the
          shipment). You or your agent shall have the right to count the number
          of pallets containing the Inventory to confirm the quantity of pallets
          matches the shipping manifest prior to taking possession. Unless the
          quantity of pallets does not match the shipping manifest, if you fail
          or refuse to accept the delivery of such Inventory and the Inventory
          is returned to Seller, Hyena Auction will re-initiate a new shipment,
          and you will be responsible for paying for the cost of reshipment. You
          expressly acknowledge and agree that you shall have no right to return
          the Inventory after taking possession of the Inventory, except as
          expressly set forth below.
        </p>
        <p style={{ marginBottom: "10px" }}>
          5.2 Inspection; Acceptance. You shall have twenty-four (24) hours from
          the date you take possession of Inventory to inspect the Inventory for
          any discrepancies with the description of the Inventory contained in
          the Listing, and to report any discrepancies to Hyena Auction. To
          report a discrepancy, you must click on the “problem” next to the
          respective order in your account or send an email to Hyena Auction
          sales@ hyena auction.com which identifies the Inventory and describes
          the purported discrepancies (“Discrepancy Report”). Hyena Auction will
          thereafter forward the Discrepancy Report to the Seller. Seller shall
          have the right to conduct an additional inspection at its own expense.
          If Seller agrees that there was a discrepancy, Seller will work with
          you to reach an amicable resolution, which may include a reimbursement
          of some or all of the Winning Bid Amount. Any such reimbursement may
          be in the form of an offset against any payments you may owe to Hyena
          Auction for Seller merchandise, at Seller’s discretion. If Seller does
          not agree that there was a discrepancy, or you and the Seller cannot
          agree on an amicable resolution, the dispute between you and Seller
          shall be resolved in accordance with the terms set forth in Section
          11. If you have take possession of Inventory and do not submit a valid
          Discrepancy Report within the twenty-four (24) hour inspection period,
          you shall be deemed to have made an unqualified acceptance of the
          Inventory, and you waive all claims with respect thereto. All sales
          are final.
        </p>
        <p style={{ marginBottom: "25px" }}>
          5.3 Further Assurances. Each party agrees that it will execute and
          deliver, or cause to be executed and delivered, all such other
          instruments, and it will take all reasonable actions, as may be
          necessary to transfer and convey the Inventory to Buyer and to
          consummate the transactions contemplated herein.
        </p>

        <h5 style={{ marginBottom: "15px" }}>6. Confidential Information</h5>
        <p style={{ marginBottom: "25px" }}>
          Buyer acknowledges that Hyena Auction and/or a Seller may provide to
          Buyer bank account information to facilitate payment of the Purchase
          Price, or other information that is identified as confidential at the
          time of disclosure or should reasonably be considered confidential
          based on the circumstances surrounding the disclosure and the nature
          of the information disclose (“Confidential Information”). Buyer agrees
          to: (i) hold in confidence and not disclose Confidential Information
          to third parties except as permitted by these Terms of Purchase and
          the Terms of Use; and (ii) use the Confidential Information only to
          fulfill its obligations and exercise its rights under these Terms of
          Purchase and the Terms of Use. Buyer may share Confidential
          Information with its employees, agents or contractors having a
          legitimate need to know (provided that Buyer remains responsible for
          such parties’ compliance with the terms of this Section 6). These
          confidentiality obligations do not apply to (and Confidential
          Information does not include) information that: (i) is or becomes
          public knowledge through no fault of Buyer; (ii) was known by Buyer
          prior to receipt of the Confidential Information; (iii) is rightfully
          obtained by Buyer from a third party without breach of any
          confidentiality obligation; or (iv) is independently developed by
          Buyer without using Hyena Auction ’s or a Seller’s Confidential
          Information. Buyer may also disclose Confidential Information to the
          extent required by law or court order, provided it gives advance
          notice to Hyena Auction or Seller, as applicable (if permitted by
          law), and cooperates in any effort by Hyena Auction or Seller to
          obtain confidential treatment for the information. This Section 6
          shall survive each purchase transaction hereunder, and any termination
          of these Terms of Purchase or the Terms of Use.
        </p>

        <h5 style={{ marginBottom: "15px" }}>7. Representation and Warranty</h5>
        <p style={{ marginBottom: "25px" }}>
          Buyer represents and warrants that if it creates or uses a Hyena
          Auction account on behalf of a business entity, including by placing a
          bid for Inventory, it is authorized to act on behalf of such business
          entity and to bind the business entity to these Terms of Purchase.
          Buyer further represents and warrant that all information it submits
          to Hyena Auction or Seller in connection with the bidding upon or
          purchase of Inventory is true, complete and accurate.
        </p>

        <h5 style={{ marginBottom: "15px" }}>
          8. WARRANTY DISCLAIMER; LIMITATION OF LIABILITY
        </h5>
        <p style={{ marginBottom: "10px" }}>
          EXCEPT AS EXPRESSLY SET FORTH IN THESE TERMS OF PURCHASE, THE SITE AND
          RELATED SERVICES, AND ALL INVENTORY IS PROVIDED TO YOU “AS IS” AND
          “WHERE IS”. IN ADDITION, AND TO THE FULLEST EXTENT PERMITTED BY LAW,
          SELLER AND Hanger Stock DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER
          EXPRESS OR IMPLIED, STATUTORY OR OTHERWISE, WITH RESPECT TO THE
          INVENTORY, THE SERVICE, THE SITE OR ANY OTHER MATTER, INCLUDING
          WITHOUT LIMITATION THE INVENTORY’S CONDITION OR QUALITY OR THE
          WARRANTIES OR CONDITIONS OF NONINFRINGEMENT, MERCHANTABILITY AND
          FITNESS FOR ANY PARTICULAR PURPOSE. NEITHER THE SELLER NOR Hanger
          Stock WARRANTS THAT THE SITE OR RELATED SERVICES WILL BE UNINTERRUPTED
          OR ERROR FREE.
        </p>
        <p style={{ marginBottom: "10px" }}>
          TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, Hanger Stock AND
          SELLERS (INCLUDING THEIR RESPECTIVE PARENTS, SUBSIDIARIES, AND
          AFFILIATES, AND OUR AND THEIR RESPECTIVE OFFICERS, DIRECTORS, AGENTS
          AND EMPLOYEES) ARE NOT LIABLE, AND BUYER AGREES NOT TO HOLD Hanger
          Stock OR SELLER RESPONSIBLE, FOR ANY DAMAGES OR LOSSES OF ANY KIND
          (INCLUDING, BUT NOT LIMITED TO, LOSS OF MONEY, GOODWILL OR REPUTATION,
          PROFITS, OTHER INTANGIBLE LOSSES, OR ANY SPECIAL, INDIRECT, OR
          CONSEQUENTIAL DAMAGES) RESULTING DIRECTLY OR INDIRECTLY FROM THE
          FOLLOWING, EVEN IF Hanger Stock OR SELLER HAS BEEN ADVISED OF THE
          POSSIBILITY OF SUCH DAMAGES OR LOSSES:
        </p>
        <p style={{ marginBottom: "10px" }}>
          (a) ANY INFORMATION OR CONTENT YOU PROVIDE (DIRECTLY OR INDIRECTLY)
          USING THE SITE OR SERVICES.
        </p>
        <p style={{ marginBottom: "10px" }}>
          (b) YOUR USE OF OR YOUR INABILITY TO USE THE SITE OR SERVICES.
        </p>
        <p style={{ marginBottom: "10px" }}>
          (c) YOUR PURCHASE OF, USE OF, OR INABILITY TO USE INVENTORY, INCLUDING
          BUT NOT LIMITED TO ANY INJURY OR DEATH INCURRED AS A RESULT OF THE USE
          OR INABILITY TO USE INVENTORY.
        </p>
        <p style={{ marginBottom: "10px" }}>
          (d) DELAYS OR DISRUPTIONS IN PROVISION OF THE SERVICES.
        </p>
        <p style={{ marginBottom: "10px" }}>
          (e) VIRUSES OR OTHER MALICIOUS SOFTWARE OBTAINED BY ACCESSING OR
          LINKING TO THE SITE OR SERVICES.
        </p>
        <p style={{ marginBottom: "10px" }}>
          (f) GLITCHES, BUGS, ERRORS, OR INACCURACIES OF ANY KIND IN THE SITE OR
          SERVICES.
        </p>
        <p style={{ marginBottom: "10px" }}>
          (g) DAMAGE TO YOUR HARDWARE DEVICE FROM THE USE OF THE SITE OR
          SERVICES.
        </p>
        <p style={{ marginBottom: "10px" }}>
          (h) THE CONTENT, ACTIONS, OR INACTIONS OF THIRD PARTIES, INCLUDING AS
          RELATED TO INVENTORY LISTED ON THE SITE; AND
        </p>
        <p style={{ marginBottom: "10px" }}>
          (i) A SUSPENSION, DEACTIVATION OR OTHER ACTION TAKEN WITH RESPECT TO
          YOUR ACCOUNT OR PASSWORD.
        </p>
        <p style={{ marginBottom: "25px" }}>
          N NO EVENT SHALL SELLER’S OR HYENA AUCTION’S LIABILITY FOR ANY AND ALL
          LOSSES OR DAMAGES RELATED TO THE USE OF THE SITE OR SERVICE, OR THE
          BIDDING UPON OR PURCHASE OF ANY INVENTORY EXCEED THE PURCHASE PRICE
          ACTUALLY PAID BY BUYER FOR THE INVENTORY AT ISSUE. THIS LIMITATION OF
          LIABILITY SHALL SURVIVE EACH PURCHASE TRANSACTION AND SHALL APPLY
          NOTWITHSTANDING THE FAILURE OF ESSENTIAL PURPOSE OF ANY LIMITED REMEDY
          HEREIN. SOME JURISDICTIONS DO NOT ALLOW THE DISCLAIMER OF WARRANTIES
          OR EXCLUSION OF DAMAGES, SO SUCH DISCLAIMERS AND EXCLUSIONS MAY NOT
          APPLY TO YOU.
        </p>

        <h5 style={{ marginBottom: "15px" }}>9. RELEASE</h5>
        <p style={{ marginBottom: "25px" }}>
          IF YOU HAVE A DISPUTE WITH ONE OR MORE SELLERS, YOU RELEASE Hanger
          Stock (AND OUR AFFILIATES AND SUBSIDIARIES, AND OUR AND THEIR
          RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES AND AGENTS) FROM ALL CLAIMS,
          DEMANDS AND DAMAGES (ACTUAL AND CONSEQUENTIAL) OF EVERY KIND AND
          NATURE, KNOWN AND UNKNOWN, ARISING OUT OF OR IN ANY WAY CONNECTED WITH
          SUCH DISPUTES. IN ENTERING INTO THIS RELEASE YOU EXPRESSLY WAIVE ANY
          PROTECTIONS (WHETHER STATUTORY OR OTHERWISE) THAT WOULD OTHERWISE
          LIMIT THE COVERAGE OF THIS RELEASE TO INCLUDE ONLY THOSE CLAIMS WHICH
          YOU MAY KNOW OR SUSPECT TO EXIST IN YOUR FAVOR AT THE TIME OF AGREEING
          TO THIS RELEASE.
        </p>

        <h5 style={{ marginBottom: "15px" }}>10. INDEMNIFICATION</h5>
        <p style={{ marginBottom: "25px" }}>
          YOU WILL INDEMNIFY AND HOLD HYENA AUCTION AND SELLERS (INCLUDING THEIR
          RESPECTIVE PARENTS, SUBSIDIARIES, AND AFFILIATES, AND OUR AND THEIR
          RESPECTIVE OFFICERS, DIRECTORS, AGENTS AND EMPLOYEES) HARMLESS FROM
          ANY CLAIM OR DEMAND, INCLUDING REASONABLE LEGAL FEES, DUE TO OR
          ARISING OUT OF (A) YOUR BREACH OF THIS PURCHASE AGREEMENT OR THE USER
          AGREEMENT, (B) YOUR IMPROPER USE OF THE SITE OR SERVICES, (C) YOUR
          SUBSEQUENT SALE OF ANY INVENTORY, (D) YOUR BREACH OF ANY APPLICABLE
          LAW OR REGULATION, OR (E) YOUR INFRINGEMENT VIOLATION OF THE RIGHTS OF
          ANY THIRD PARTY.
        </p>

        <h5 style={{ marginBottom: "15px" }}>11. DISPUTES</h5>
        <p style={{ marginBottom: "25px" }}>
          PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR RIGHTS AND WILL
          HAVE A SUBSTANTIAL IMPACT ON HOW CLAIMS OR DISPUTES WILL BE RESOLVED.
          IF YOU BID UPON, PURCHASE, OFFER FOR SALE, OR SELL INVENTORY THROUGH
          THE HYENA AUCTION SITE (ENTER INTO A “TRANSACTION”), ANY CLAIM OR
          DISPUTE THAT ARISES OUT OF OR RELATES TO THE TRANSACTION, WHETHER
          BETWEEN YOU AND HYENA AUCTION OR BETWEEN YOU AND A BUYER OR SELLER (AS
          APPLICABLE), SHALL BE RESOLVED IN ACCORDANCE WITH THE DISPUTE
          RESOLUTION PROCEDURES SET FORTH IN THE ALTERNATIVE DISPUTE RESOLUTION
          POLICY WITH RESPECT TO ANY OTHER CLAIM OR DISPUTE BETWEEN YOU AND ,
          HYENA AUCTION SUCH CLAIM OR DISPUTE WILL BE RESOLVED EXCLUSIVELY BY A
          STATE OR FEDERAL COURT LOCATED IN THE STATE OF CALIFORNIA, AND YOU AND
          HYENA AUCTION EACH AGREE TO SUBMIT TO THE PERSONAL JURISDICTION OF THE
          COURTS LOCATED WITHIN THE STATE OF CALIFORNIA FOR PURPOSES OF
          LITIGATING ALL SUCH CLAIMS OR DISPUTES, AND WAIVE ALL OBJECTIONS TO
          PERSONAL JURISDICTION IN THE STATE OF CALIFORNIA.
        </p>

        <h5 style={{ marginBottom: "15px" }}>12. General Provisions</h5>
        <p style={{ marginBottom: "10px" }}>
          12.1 Governing Law. These Terms of Purchase will be construed in
          accordance with and governed exclusively by the laws of the State of
          California applicable to agreements made among California residents
          and to be performed wholly within such jurisdiction, regardless of
          such parties’ actual domiciles.
        </p>
        <p style={{ marginBottom: "10px" }}>
          12.2. Independent Contractors. These Terms of Purchase does not
          create, and nothing contained in These Terms of Purchase will be
          deemed to establish a joint venture between any of the parties, or the
          relationship of employer-employee, partners or principal-agent.
          Further, no party will have the power to bind any other party without
          the other’s prior written consent nor make any representation that it
          has any such power.
        </p>
        <p style={{ marginBottom: "10px" }}>
          12.3 Severability; Headings. If any provision herein is held to be
          invalid or unenforceable for any reason, the remaining provisions will
          continue in full force without being impaired or invalidated in any
          way. The parties agree to replace any invalid provision with a valid
          provision that most closely approximates the intent and economic
          effect of the invalid provision. Headings are for reference purposes
          only and in no way define, limit, construe or describe the scope or
          extent of such section.
        </p>
        <p style={{ marginBottom: "10px" }}>
          12.4 Force Majeure. If performance hereunder is interfered with by any
          condition beyond a party’s reasonable control, such as an act of God,
          the affected party will be excused from such performance to the extent
          of such condition.
        </p>
        <p style={{ marginBottom: "10px" }}>
          12.5 Entire Agreement; Waiver. These Terms of Purchase, including all
          agreements referred to and incorporated herein, sets forth the entire
          understanding and agreement of the parties, and supersedes any and all
          oral or written agreements or understandings between the parties. The
          waiver of a breach of any provision of these Terms of Purchase will
          not operate or be interpreted as a waiver of any other or subsequent
          breach.In the event of a conflict between these Terms of Purchase and
          the Terms of Use, the provisions of these Terms of Purchase shall
          control.
        </p>
        <p style={{ marginBottom: "45px" }}>
          12.6 Changes to Terms of Purchase. Hyena Auction may alter these Terms
          of Purchase at any time by providing thirty (30 days) written notice
          of such change. Seller’s continued access or use of the Site or
          Services after such notice will constitute acceptance of such change.
          If Seller does not wish to be bound to such changes, it may not use
          the Site or Services subsequent to the effective date of such changes.
        </p>

        <h2 style={{ marginBottom: "15px", fontWeight: 700, color: "#599f22" }}>
          Terms of Use
        </h2>
        <p style={{ marginBottom: "30px" }}>(Last Updated: March 1, 2021)</p>

        <p style={{ marginBottom: "10px" }}>
          These Terms of Use are an ongoing contract between you (“User” or
          “you”) and Hyena Auction Solutions, LLC. ("Hyena Auction " or "we")
          and govern your use of the Hyena Auction website located at
          http://www.Hyena Auction.com (the "Site") and related services (the
          “Services”), through which users may p Hyena Auction purchase products
          (“Inventory”) from third-party sellers. By accessing or using the Site
          or Services, you signify your unconditional agreement to follow and be
          bound by these Terms of Use. If you do not accept these Terms of Use,
          you may not access or use the Site or Services. By accessing or using
          the Site or Services, you certify that you are 18 years of age or
          older. If you are not 18 years of age or older, you must cease all
          access and use of the Site or Services. Hyena Auction reserves the
          right to update or modify these Terms of Use at any time, and such
          changes shall take effect and be binding immediately on a prospective
          basis upon posting to the Site. For this reason, we encourage you to
          review these Terms of Use whenever you access or use the Site. In
          addition to these Terms of Use, your use of the Site and Services is
          subject to the terms of the privacy policy, and if you bid upon,
          purchase, offer for sale, or sell Inventory, the Hyena Auction Terms
          of Purchase. PLEASE READ SECTION 11 (DISPUTES) CAREFULLY. IT AFFECTS
          YOUR RIGHTS AND WILL HAVE A SUBSTANTIAL IMPACT ON HOW CLAIMS OR
          DISPUTES WILL BE RESOLVED. BY USING THE SITE OR SERVICES, YOU AGREE TO
          BE BOUND BY THE DISPUTE RESOLUTION POLICY DESCRIBED IN SECTION 11.
        </p>
        <p style={{ marginBottom: "10px" }}>
          1. Nature of Relationships Hyena Auction is an intermediary that
          provides a platform, including the Site and Services, through which
          certain Users (each a “Buyer”) may purchase Inventory from third-party
          sellers (each a “Seller”) Hyena Auction does not sell Inventory, and
          is not a party to any purchase and sale transaction, but merely
          provides the platform through which a purchase and sale may be
          transacted between a Buyer and Seller. Hyena Auction does not inspect,
          and makes no representations or warranties regarding, any Inventory.
          Further Hyena Auction does not recommend or endorse any Seller or
          Buyer, and makes no representations or warranties regarding any Seller
          or Buyer. You should exercise caution and use your independent
          judgment before bidding upon or purchasing Inventory.
        </p>
        <p style={{ marginBottom: "10px" }}>
          2. Registration; Account Security In order to use some aspects of the
          Site and Services, you will be required to register with Hyena Auction
          to create an account, username and password, and will also be required
          to provide certain other information, including billing and payment
          information. If you elect to register with Hyena Auction, you agree to
          provide Hyena Auction with only truthful and accurate information, and
          to keep this information up-to-date. You agree not to impersonate any
          other person or company. You are responsible for maintaining the
          confidentiality of your username and password, and you agree not to
          authorize anyone else to use your username and password. You are
          responsible for all activity under your account. You agree to notify
          promptly of any unauthorized use of your account. If you are
          registering as a business entity, you represent that you have the
          authority to bind the entity to these Terms of Use.
        </p>
        <p style={{ marginBottom: "10px" }}>
          3. Content 1. User Content. may allow you to submit text, images,
          feedback, comments, suggestions or other information or content (“User
          Content”) to or through the Site or Services. If you submit User
          Content, you grant Hyena Auction a nonexclusive, perpetual,
          irrevocable, royalty-free and fully sublicensable right to use,
          reproduce, modify, adapt, publish, perform, translate, create
          derivative works from, distribute, and display such User Content
          throughout the world in any media. Hyena Auction is and shall be under
          no obligation to: (a) maintain any User Content you submit in
          confidence; (b) pay you any compensation of any kind for any User
          Content; or (c) respond to any User Content you submit. You agree that
          any User Content that is a review of a seller, (“Review”) shall not
          contain any material that is, in the sole and absolute discretion of
          Hyena Auction inappropriate, defamatory, false, obscene, violent,
          unlawful, threatening or otherwise objectionable (hereinafter,
          “Prohibited Content”). Notwithstanding the generality of the
          foregoing, Prohibited Content includes, without limitation, any
          content that (i) violates these Terms of Use, (ii) contains personal
          information of any person other than yourself, (iii) references or
          threatens legal actions, (iv) attempts to artificially raise or lower
          a seller‘s ratings, (v) relates to variables outside of the seller‘s
          control, and (vi) solicits business outside of the Hyena Auction
          platform. Posting of any Prohibited Content, in addition to any and
          all other rights and remedies available to Hyena Auction, may result
          in account suspension or termination. Hyena Auction may refuse or
          remove a Review in its sole discretion and without notice to you.
          However, Hyena Auction shall have no obligation to monitor Reviews,
          and you agree that neither Hyena Auction nor its affiliates,
          employees, or agents will be liable for Reviews or any loss or damage
          resulting from Reviews. Notwithstanding the foregoing, Hyena Auction
          reserves the right to monitor all activity conducted over the Platform
          and anticipates that it will do so from time to time. You represent
          and warrant that you own or have obtained all necessary rights and/or
          licenses to User Content that you submit, and that your and Hyena
          Auction`s use of such User Content does not violate the terms of this
          Section 3.1 and will not violate or infringe upon the rights of any
          person or entity. You agree to indemnify Hyena Auction for all claims,
          expenses and costs resulting from User Content you submit. Hyena
          Auction has the right, but not the obligation, to monitor and edit or
          remove any User Content. Hyena Auction assumes no liability for User
          Content.
        </p>
        <p style={{ marginBottom: "10px" }}>
          1. Hyena Auction Content. All materials, including text, images,
          illustrations, designs, icons, photographs, software, programs and
          written and other materials that are part of the Site or accessible
          through the Service, other than User Content (collectively, Hyena
          Auction" Content"), is the property of Hyena Auction or its licensors.
          Hyena Auction Content is intended solely for personal, non-commercial
          use. No right, title or interest in any Hyena Auction Content is
          transferred to you by way of these Terms of Use or otherwise. You may
          not reproduce (except as noted above), publish, transmit, distribute,
          display, modify, create derivative works from, sell or participate in
          any sale of or exploit in any way, in whole or in part, any of the
          Hyena Auction Content, the Site or any related software. Your access
          to and use of Hyena Auction Content is at your sole risk and you
          acknowledge that Hyena Auction and/or its licensors shall have no
          liability to you for Hyena Auction Content for any reason, including
          Hyena Auction Content that may be deemed offensive, indecent, or
          objectionable.
        </p>
        <p style={{ marginBottom: "10px" }}>
          2. 4. Use of the Site and Services, Site Security In connection with
          your access or use of the Site or Service, you are prohibited from:
          accessing data not intended for you or logging onto a server or an
          account which you are not authorized to access; using any engine,
          software, tool, agent or other device or mechanism (including without
          limitation browsers, spiders, robots, avatars or intelligent agents)
          to access, navigate or search the Site, other than the search engine
          and search agents available from on the Site and other than generally
          available third-party web browsers (e.g., Mozilla Firefox and
          Microsoft Explorer); using any device, software or routine to
          interfere or attempt to interfere with the proper working of the Site
          or any activity being conducted on the Site attempting to probe, scan
          or test the vulnerability of a Hanger Stock system or network or to
          breach security or authentication measures without proper
          authorization. attempting to interfere with service to any User, host
          or network, including, without limitation, via means of submitting a
          virus to the Site or through the Service, overloading, "flooding,"
          "spamming," "mailbombing" or "crashing”; sending unsolicited email,
          including promotions and/or advertising of products or services;
          forging any TCP/IP packet header or any part of the header information
          in any email or newsgroup posting; copying, modifying, adapting,
          reproducing, reverse engineering, decompiling, disassembling, or
          preparing derivative works from Hanger Stock Content or User Content
          that is not your own; distributing viruses, malicious code, malware or
          any other technologies that may harm Hyena Auction , the Site, the
          Services or a User; violating or circumventing any applicable laws,
          regulations or Hanger Stock technical measures, security measures or
          policies; violating, infringing, or breaching the rights of Hyena
          Auction or a third-party, including, but not limited to any
          copyrights, trademark rights, patent rights, trade secrets rights,
          rights of publicity or personality, moral rights, or any other
          proprietary rights; submitting to the Site or through the Services any
          false, inaccurate, misleading, deceptive, defamatory, or libelous
          materials or User Content.
        </p>
        <p style={{ marginBottom: "10px" }}>
          Violations of system or network security may result in civil or
          criminal liability. Hyena Auction will investigate occurrences that
          may involve such violations and may involve, and cooperate with, law
          enforcement authorities in prosecuting Users who are involved in such
          violations.
        </p>
        <p style={{ marginBottom: "10px" }}>
          5. Export Control Laws Hyena Auction and the Site are located in the
          United States. The United States and certain other jurisdictions
          regulate the export of certain products and information. You agree to
          comply with all applicable regulations and further agree not to export
          or re-export the Hyena Auction Content (including any software) to
          countries or persons prohibited under the United States or other
          applicable export control laws or regulations. If you access and
          download any Hyena Auction Content, you represent and warrant that (a)
          you are not in a country where such export is prohibited, and (b) are
          not a person or entity to which export is prohibited. 6.Intellectual
          Property Rights
        </p>
        <p style={{ marginBottom: "10px" }}>
          1. Copyrights and Trademarks. All Hyena Auction Content, including all
          copyrights therein, is owned, controlled or licensed by Hyena Auction
          or its licensors and is protected by U.S. and international copyright
          laws. The compilation (meaning the collection, arrangement, and
          assembly) of all contents on the Site is the exclusive property of
          Hyena Auction and is also protected by U.S. and international
          copyright law Hyena Auctions.“” and the Hyena Auction logos and
          designs are trademarks, service marks or trade dress ("Marks") of
          Hyena Auction, and may not be used in connection with any product or
          service that is not Hyena Auction ‘s or in a manner that is likely to
          cause confusion among customers. All other trademarks and service
          marks not owned by Hyena Auction that appear on the Site are the
          property of their respective owners. Access to this Site does not
          confer and shall not be considered as conferring upon anyone any
          license under any of 's or any third-party's intellectual property
          rights Hyena Auction. reserves all rights not expressly granted
          herein.
        </p>
        <p style={{ marginBottom: "10px" }}>
          2. Claims of Copyright Infringement. Hyena Auction respects the
          intellectual property rights of others. If you believe that any
          content appearing on the Site is being used in a manner that
          constitutes copyright infringement, please follow the procedures set
          forth in our Copyright Infringement Policy.
        </p>
        <p style={{ marginBottom: "10px" }}>
          7. References and Links to Third-Parties References on the Site to any
          names, marks, products or services of third-parties or hypertext links
          to third-party sites or information are provided solely as a
          convenience to you and do not in any way constitute or imply ' Hyena
          Auction`s endorsement, sponsorship or recommendation of the
          third-party, or its information, products or services. Hyena Auction
          is not responsible for the content of any third-party sites and does
          not make any representations regarding the content or accuracy of
          material on such sites. If you decide to link to any such third party
          web sites, you do so entirely at your own risk.
        </p>
        <p style={{ marginBottom: "10px" }}>
          8.Termination These Terms of Use are effective unless and until
          terminated by either you or Hanger Stock. You may terminate these
          Terms of Use at any time, provided that you discontinue any further
          use of this Site. Hyena Auction also may terminate these Terms of Use
          at any time and may do so immediately without notice, and/or may deny
          you access to the Site or Services, in Hyena Auction's sole
          discretion. Upon any termination of these Terms of Use by either you
          or , Hyena Auction you must (a) immediately discontinue use of the
          Site and Services, and (b) promptly destroy all Hyena Auction Content
          downloaded or otherwise copied from the Site, as well as all copies of
          such materials, whether made under the Terms of Use or otherwise.
          Sections 3.1, 3.2, 6.1 and 8-12 shall survive any termination of these
          Terms of Use.
        </p>
        <p style={{ marginBottom: "10px" }}>
          9.Indemnification You agree to defend, indemnify and hold harmless
          Hyena Auction, its affiliates, and their respective directors,
          officers and employees from and against any and all claims, damages,
          costs and expenses, including attorneys' fees, arising from or related
          to your breach of these Terms of Use, your improper use of the Site or
          Service, or your breach of any applicable law or infringement of the
          rights of a third party. Hyena Auction shall have the right to
          participate in the defense of any such claim, at its own cost. You may
          not settle or negotiate any claim that results in liability to, or
          imposes any obligation upon, Hyena Auction, financial or otherwise,
          without Hyena Auction ‘s written consent.
        </p>
        <p style={{ marginBottom: "10px" }}>
          10.DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY 1. DISCLAIMER OF
          WARRANTIES. THE SITE AND THE SERVICES ARE PROVIDED BY HYENA AUCTION ON
          AN "AS IS" AND "AS AVAILABLE" BASIS. HYENA AUCTION MAKES NO
          REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO
          THE SERVICES, THE SITE OR THE INFORMATION, CONTENT, MATERIALS, OR
          INVENTORY OFFERED ON THE SITE. TO THE FULLEST EXTENT PERMISSIBLE BY
          APPLICABLE LAW, HYENA AUCTION DISCLAIMS ALL WARRANTIES, EXPRESS OR
          IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF
          MERCHANTABILITY, NON-INFRINGEMENT AND FITNESS FOR A PARTICULAR PURPOSE
          Hyena Auction. DOES NOT WARRANT THAT THE SERVICES OR SITE ARE FREE OF
          VIRUSES OR OTHER HARMFUL COMPONENTS. WITHOUT LIMITING THE FOREGOING,
          Hyena Auction DISCLAIMS ANY AND ALL WARRANTIES, EXPRESS OR IMPLIED,
          FOR ANY INVENTORY OFFERED ON THE SITE. YOU AGREE THAT YOUR USE OF THE
          SITE AND THE SERVICES IS AT YOUR SOLE RISK. THIS DISCLAIMER
          CONSTITUTES AN ESSENTIAL PART OF THESE TERMS OF USE. 2. LIMITATION OF
          LIABILITY. UNDER NO CIRCUMSTANCES AND UNDER NO LEGAL OR EQUITABLE
          THEORY, WHETHER IN TORT, CONTRACT, STRICT LIABILITY OR OTHERWISE,
          SHALL Hyena Auction , ITS AFFILIATES, AND THEIR RESPECTIVE EMPLOYEES,
          DIRECTORS, OFFICERS, AND AGENTS BE LIABLE TO YOU OR TO ANY OTHER
          PERSON FOR ANY INDIRECT, SPECIAL, INCIDENTAL OR CONSEQUENTIAL LOSSES
          OR DAMAGES OF ANY NATURE ARISING OUT OF OR IN CONNECTION WITH THE USE
          OF OR INABILITY TO USE THE SITE OR SERVICES, INCLUDING, WITHOUT
          LIMITATION, DAMAGES FOR LOST PROFITS, LOSS OF GOODWILL, LOSS OF DATA,
          WORK STOPPAGE, ACCURACY OF RESULTS, OR COMPUTER FAILURE OR
          MALFUNCTION, EVEN IF HYENA AUCTION , ITS AFFILIATES, OR THEIR
          RESPECTIVE EMPLOYEES, DIRECTORS, OFFICERS, AND AGENTS HAVE BEEN
          ADVISED OF OR SHOULD HAVE KNOWN OF THE POSSIBILITY OF SUCH LOSSES OR
          DAMAGES. IN NO EVENT WILL HYENA AUCTION BE LIABLE FOR ANY DAMAGES IN
          EXCESS OF THE FEES PAID BY YOU IN CONNECTION WITH YOUR USE OF THE SITE
          OR SERVICES DURING THE SIX MONTH PERIOD PRECEDING THE DATE ON WHICH
          THE CLAIM AROSE. CERTAIN JURISDICTIONS DO NOT ALLOW LIMITATIONS ON
          IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES.
          IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS,
          EXCLUSIONS, OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MIGHT HAVE
          ADDITIONAL RIGHTS.
        </p>
        <p style={{ marginBottom: "10px" }}>
          1. DISPUTE RESOLUTION PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS
          YOUR RIGHTS AND WILL HAVE A SUBSTANTIAL IMPACT ON HOW CLAIMS OR
          DISPUTES WILL BE RESOLVED. IF YOU BID UPON, PURCHASE, OFFER FOR SALE,
          OR SELL INVENTORY THROUGH THE Hanger Stock SITE (ENTER INTO A
          “TRANSACTION”), ANY CLAIM OR DISPUTE THAT ARISES OUT OF OR RELATES TO
          THE TRANSACTION, WHETHER BETWEEN YOU AND Hanger Stock OR BETWEEN YOU
          AND A BUYER OR SELLER (AS APPLICABLE), SHALL BE RESOLVED IN ACCORDANCE
          WITH THE DISPUTE RESOLUTION PROCEDURES SET FORTH IN THE ALTERNATIVE
          DISPUTE RESOLUTION POLICY WHICH ARE INCORPORATED HEREIN. WITH RESPECT
          TO ANY OTHER CLAIM OR DISPUTE BETWEEN YOU AND Hanger Stock, SUCH CLAIM
          OR DISPUTE WILL BE RESOLVED EXCLUSIVELY BY A STATE OR FEDERAL COURT
          LOCATED IN THE STATE OF CALIFORNIA, AND YOU AND Hanger Stock EACH
          AGREE TO SUBMIT TO THE PERSONAL JURISDICTION OF THE COURTS LOCATED
          WITHIN THE STATE OF CALIFORNIA FOR PURPOSES OF LITIGATING ALL SUCH
          CLAIMS OR DISPUTES, AND WAIVE ALL OBJECTIONS TO PERSONAL JURISDICTION
          IN THE STATE OF CALIFORNIA.
        </p>
        <p style={{ marginBottom: "10px" }}>2. General Provisions</p>
        <p style={{ marginBottom: "50px" }}>
          1. Governing Law. These Terms of Use will be construed in accordance
          with and governed exclusively by the laws of the State of California
          applicable to agreements made among California residents and to be
          performed wholly within such jurisdiction, regardless of such parties‘
          actual domiciles. 2. Severability; Headings. If any provision herein
          is held to be invalid or unenforceable for any reason, the remaining
          provisions will continue in full force without being impaired or
          invalidated in any way. The parties agree to replace any invalid
          provision with a valid provision that most closely approximates the
          intent and economic effect of the invalid provision. Headings are for
          reference purposes only and in no way define, limit, construe or
          describe the scope or extent of such section. 3. Force Majeure. If
          performance hereunder is interfered with by any condition beyond a
          party‘s reasonable control, such as an act of God, the affected party
          will be excused from such performance to the extent of such condition.
          4. Entire Agreement; Waiver. These Terms of Use, including all
          agreements referred to and incorporated herein, sets forth the entire
          understanding and agreement of the parties, and supersedes any and all
          oral or written agreements or understandings between the parties. The
          waiver of a breach of any provision of these Terms of Use will not
          operate or be interpreted as a waiver of any other or subsequent
          breach. 5. Changes to Terms of Purchase. Hyena Auction may alter the
          terms of these Terms of Use at any time by providing thirty (30 days)
          written notice of such change. User‘s continued access or use of the
          Site or Services after such notice will constitute acceptance of such
          change. If User does not wish to be bound to such changes, it may not
          use the Site or Services subsequent to the effective date of such
          changes.
        </p>
        <p style={{ marginBottom: "10px" }}>
          Hyena Auction Copyright Infringement Policy In accordance with the
          Digital Millennium Copyright Act, Hyena Auction provides this
          Copyright Infringement Policy. Hyena Auction respects the intellectual
          property of others. We strive to respond promptly to proper notices of
          copyright infringement by removing or disabling access to allegedly
          infringing material. It is Hyena Auction’s policy to terminate the
          access privileges of those who repeatedly infringe the copyrights of
          others. Submitting a Copyright Infringement Notification:
        </p>
        <p style={{ marginBottom: "10px" }}>
          If you believe that any material appears on this website in a way that
          infringes the copyright in a work owned by you, please send a
          notification containing the following information to Hyena Auction ’s
          Copyright Agent:
        </p>
        <p style={{ marginBottom: "10px" }}>
          • an electronic or physical signature of the person authorized to act
          on behalf of the owner of the copyright interest;
        </p>
        <p style={{ marginBottom: "10px" }}>
          • a description of the work in which you hold a copyright interest
          which you believe is being infringed;
        </p>
        <p style={{ marginBottom: "25px" }}>
          • a description of the location on this website where the allegedly
          infringing material is located (preferably including a URL address);
        </p>

        <p style={{ marginBottom: "10px" }}>
          • your address, telephone number, and email address;
        </p>
        <p style={{ marginBottom: "10px" }}>
          • a statement by you that you have a good faith belief that the
          disputed use is not authorized by the copyright owner, its agent, or
          the law; and
        </p>
        <p style={{ marginBottom: "10px" }}>
          • a statement by you, made under penalty of perjury, that the above
          information in your notification is accurate and that you are the
          copyright owner or authorized to act on the copyright owner’s behalf.
        </p>
        <p style={{ marginBottom: "10px" }}>
          Hyena Auction s Copyright Agent can be reached at the following
          address:
        </p>
        <p style={{ marginBottom: "10px" }}>Hyena Auction Copyright Agent</p>
        <p style={{ marginBottom: "10px" }}>870 Crenshaw Blvd #306</p>
        <p style={{ marginBottom: "10px" }}>Los Angeles CA 90005</p>
        <p style={{ marginBottom: "10px" }}>
          Email: copyright@hyenaauction.com
        </p>
        <p style={{ marginBottom: "10px" }}>
          When Hyena Auction removes material or disables access to material in
          response to an infringement notification Hyena Auction, will make a
          reasonable attempt to contact the allegedly infringing party, provide
          information about the notification and removal, and provide
          information about submitting a counter-notification. Hyena Auction may
          also provide a copy of the infringement notification to the allegedly
          infringing party. Submitting a Counter-Notification:
        </p>
        <p style={{ marginBottom: "10px" }}>
          If you believe that any material identified in a copyright
          infringement notification is not infringing, or that you have the
          authorization from the copyright owner, the copyright owner’s agent,
          or pursuant to the law, to post and use the material complained of,
          you may send a counter-notification containing the following
          information to Hyena Auction’s Copyright Agent (identified above):
        </p>
        <p style={{ marginBottom: "10px" }}>
          • your physical or electronic signature;
        </p>
        <p style={{ marginBottom: "10px" }}>
          • identification of the material that has been removed or to which
          access has been disabled, and the location at which the material
          appeared before it was removed or disabled;
        </p>
        <p style={{ marginBottom: "10px" }}>
          • a statement that you have a good faith belief that the materials was
          removed or disabled as a result of mistake or a misidentification of
          the material; and
        </p>
        <p style={{ marginBottom: "10px" }}>
          • your name, address, telephone number, and e-mail address, a
          statement that you consent to the jurisdiction of the federal court in
          the Western District of Washington, and a statement that you will
          accept service of process from the person who provided notification of
          the alleged infringement.
        </p>
        <p style={{ marginBottom: "30px" }}>
          If Hyena Auction receives a counter-notification, we may send a copy
          of the counter-notification to the original complaining party
          informing that person that we may replace the removed material or
          cease disabling it in 10 business days. Unless the original
          complaining party files an action seeking a court order against the
          person who provided the allegedly infringing material, the removed
          material may be replaced, or access to it restored, 14 business days
          or more after receipt of the counter-notification, at Hyena Auction’s
          sole discretion.
        </p>

        <h5 style={{ marginBottom: "15px" }}>
          Alternative Dispute Resolution Policy
        </h5>
        <p style={{ marginBottom: "10px" }}>(Last Revised: March 1, 2017)</p>
        <p style={{ marginBottom: "10px" }}>
          Please read this alternative dispute resolution policy (“ADR policy”)
          carefully. It affects your rights and will have a substantial impact
          on how claims or disputes arising out of or related to a transaction
          (defined below) through the Hanger Stock services are resolved. Please
          note that this ADR policy only applies to claims or disputes arising
          out of or related to a transaction. All other claims or disputes
          between you and Hanger Stock shall be resolved in accordance with the
          dispute resolution procedures set forth in the terms of use. Terms of
          Use.
        </p>
        <h5 style={{ marginBottom: "10px" }}>1. Definitions.</h5>
        <p style={{ marginBottom: "10px" }}>
          1.1 “Hyena Auction” means “Hyena Auction Solutions, a Delaware
          corporation. 1.2 “Hyena Auction Services” means the technology and
          services provided by Hanger Stock, whereby Hyena Auction configures,
          operates, hosts and manages an auction-based private marketplace
          website at http://www. Hyena Auction.com (the “Site”) allowing Buyers
          to bid upon and purchase Inventory from Sellers. ` 1.3 “Buyer” means
          an end user of the Hyena Auction Services who bids upon or purchases
          Inventory offered for sale and/or sold by a Seller through the Hanger
          Stock Services. 1.4 “Inventory” means tangible goods made available by
          a Seller through the Hyena Auction Services for bidding upon and/or
          purchase by a Buyer. 1.5 “Seller” means an end user of the Hyena
          Auction Services who makes available Inventory through the Hyena
          Auction Services for bidding upon and/or purchase by Buyers. 1.6
          “Transaction” means the bidding upon, purchase, offering for sale, or
          sale of Inventory through the Hyena Auction Services.
        </p>
        <h5 style={{ marginBottom: "10px" }}>2. Acknowledgement; Release.</h5>
        <p style={{ marginBottom: "10px" }}>
          You acknowledge and agree that Hyena Auction offers an auction bidding
          platform whereby Hyena Auction operates as an intermediary and simply
          facilitates the purchase and sale of Inventory between Buyers and
          Sellers. If you have a dispute with a Buyer or Seller, you release
          Hyena Auction (and its affiliates and subsidiaries, and their
          respective officers, directors, employees, and agents) from claims,
          demands and damages (actual and consequential) of every kind and
          nature, known and unknown, arising out of or in any way connected with
          such dispute. In entering this release, you expressly waive any
          protections (whether statutory or otherwise) that would otherwise
          limit the coverage of this release to include only those claims which
          you may know or suspect to exist in your favor at the time of agreeing
          to this release.
        </p>
        <h5 style={{ marginBottom: "10px" }}>
          3. Hyena Auction Buyer Protection.
        </h5>
        <p style={{ marginBottom: "10px" }}>
          3.1 Overview. Purchasing liquidation merchandise can be a great way to
          build a business. However, it is not like purchasing new goods. The
          products that Sellers liquidate are often in non-new condition. On the
          Site, you are more likely to find returns, defectives, refurbished or
          salvage product than new items. Make sure you educate yourself on what
          to expect based on the condition of the Inventory you purchase. Every
          listing will include a condition description that you should read
          carefully. In situations identified below where your purchased
          Inventory is delivered in a condition not as described or incomplete,
          the Hyena Auction Buyer Protection service, administered by Auction
          Insurance Agency (AIA), provides you the assurance that your purchase
          will be protected from misrepresentations, listing errors and fraud.
          3.2 Covered Situations. In the event of a dispute between a Buyer and
          Seller where the purchase price of the disputed Inventory equals or
          exceeds $300.00, the Hyena Auction Buyer Protection service will apply
          in the following situations: (a) Seller fails to deliver the Inventory
          purchased by Buyer; (b) Buyer receives the Inventory, but the quantity
          of the Inventory is incorrect; (c) Inventory was delivered to Buyer
          with undisclosed damage or misrepresented condition; (d) Seller
          incorrectly described or materially misrepresented the Inventory
          type/model; and (e) Buyer’s receipt of the Inventory is deemed by law
          enforcement to be stolen. 3.3 Eligibility & Coverage Limits. The
          purchase price of the disputed Inventory must equal or exceed $300 to
          be eligible for the Buyer Protection service. Maximum reimbursement
          under the Buyer Protection service is limited to the amount of the
          purchase price, not to exceed $20,000.00. In situations where your
          dispute qualifies for coverage and the Seller fails to offer an
          acceptable resolution, the Buyer Protection third-party claim
          administrator will determine the amount of coverage to settle the
          dispute based on the situation and applicable devaluation. The
          necessary funds to fulfill the determined financial adjustment will be
          sourced from the Seller’s sale proceeds held by Hyena Auction when
          possible. In the event those funds have already been released, the
          third-party claim administrator will fulfill the determined financial
          adjustment on behalf of, Hyena Auction and will have the additional
          option to resell the disputed Inventory on Hyena Auction in which case
          the Buyer’s net resale loss will be covered. 3.4 Shipping. In the
          event the seller is found at fault, and you qualify for a refund of
          the entire purchase price, you will be reimbursed for your original
          shipping expenses up to a maximum of $1000 when the Inventory is being
          returned to the seller or is resold on Hanger Stock by the third-party
          claim administrator.
        </p>
        <p style={{ marginBottom: "10px" }}>
          3.5 Exclusions. Not all disputes qualify for Buyer Protection
          reimbursement. The following situations are not covered or will result
          in a Buyer Protection dispute being denied reimbursement:
        </p>
        <p style={{ marginBottom: "10px" }}>
          • The purchase price for the Inventory is under the $300 minimum
          qualifying amount.
        </p>
        <p style={{ marginBottom: "10px" }}>
          • Any disclosures made by the Seller are not covered.
        </p>
        <p style={{ marginBottom: "10px" }}>
          • Failure to accept delivery and/or refusal to take possession of the
          Inventory will void coverage.
        </p>
        <p style={{ marginBottom: "10px" }}>
          • The Inventory was damaged in shipping.
        </p>
        <p style={{ marginBottom: "10px" }}>• Buyer’s remorse</p>
        <p style={{ marginBottom: "10px" }}>
          • Repairs or alterations made to the disputed Inventory without the
          consent of Hyena Auction or AIA.
        </p>
        <p style={{ marginBottom: "10px" }}>
          • Punitive damages, lost profits, loss of work, travel expenses,
          restocking fees, or any other fees or expenses not expressly
          identified in this Section 3 (Hyena Auction “ Buyer Protection”).
        </p>
        <p style={{ marginBottom: "10px" }}>
          • Declining a settlement offer from the Seller that is deemed an
          acceptable resolution to the dispute by the third-party claim
          administrator.
        </p>
        <p style={{ marginBottom: "10px" }}>
          • You reside, or are located, outside the United States or Canada at
          the time of the completed transaction.
        </p>
        <p style={{ marginBottom: "10px" }}>
          • You have previously filed a Buyer Protection dispute on the same
          transaction.
        </p>
        <p style={{ marginBottom: "10px" }}>
          3.6 Initiating a Buyer Protection Claim. To start the Buyer Protection
          claim process, you must contact Hyena Auction customer support at
          disputes@ Hyena Auction.com. Your Buyer Protection dispute must be
          filed no later than 30 days from the auction purchase date, and within
          2 days of the Inventory delivery date. You have 90 days to file a
          Buyer Protection dispute in the event you have purchased stolen
          Inventory. 3.7 Questions. For answers to frequently asked questions,
          please visit our FAQ page located at: FAQ. 3.8 The Hyena Auction Buyer
          Protection service is administered by Auction Insurance Agency, 2200
          Woodcrest Place & Suite 100, P.O. Box 530250, Birmingham, AL 35253.
          AIA is an industry leader in providing fraud protection and offering
          mediation for online disputes. Since 1953, AIA has been protecting all
          parties in auction transactions.
        </p>

        <h5 style={{ marginBottom: "15px" }}>4. Agreement to Arbitrate.</h5>
        <p style={{ marginBottom: "10px" }}>
          In the event your dispute is not covered by the Buyer Protection Plan
          provisions of Section 3, above, or you dispute the resolution reached
          through the Buyer Protection Plan process, you agree that all such
          disputes or claims that have arisen, or may arise, between you and a
          Buyer, Seller, or Hyena Auction (as applicable), arising out of or
          relating to a Transaction, shall be resolved exclusively through final
          and binding arbitration, rather than in court. Alternatively, you may
          assert your claims in small claims court, if your claims qualify and
          so long as the matter remains in such court and advances only on an
          individual (non-class, non-representative) basis. The Federal
          Arbitration Act governs the interpretation and enforcement of this
          agreement to arbitration. 4.1 Arbitration is more informal than a
          lawsuit in court. Arbitration uses a neutral arbitrator instead of a
          judge or jury, and court review of an arbitration award is very
          limited. However, an arbitrator can award the same damages and relief
          on an individual basis that a court can award to an individual. An
          arbitrator should apply the terms of this ADR Policy and any relevant
          agreement between the parties as a court would (including, but not
          limited to, the Terms of Purchase and Terms of Use). All issues are
          for the arbitrator to decide, except that issues relating to
          arbitrability, the scope or enforceability of this agreement to
          arbitrate, or the interpretation of this ADR Policy, shall be for a
          court of competent jurisdiction to decide. 4.2 The arbitration will be
          conducted by the American Arbitration Association ("AAA") under its
          Commercial Arbitration Rules, as modified by this Agreement to
          Arbitrate. The AAA's rules are available at www.adr.org or by calling
          the AAA at 1-800-778-7879. The use of the word "arbitrator" in this
          provision shall not be construed to prohibit more than one arbitrator
          from presiding over an arbitration; rather, the AAA's rules will
          govern the number of arbitrators that may preside over an arbitration
          conducted under this Agreement to Arbitrate. 4.3 A party who intends
          to seek arbitration must first send a written notice of the dispute
          ("Notice") to all other parties by certified U.S. Mail or by Federal
          Express (signature required) or, only if any other party has not
          provided a postal address, then by electronic mail, with a copy to
          Hyena Auction disputes@ hyenaauction.com. The Notice must include a
          description of the nature and basis of the claims the party is
          asserting and the relief sought. The parties shall thereafter make
          good faith efforts to resolve the dispute directly, but if the parties
          do not reach an agreement to do so within thirty (30) days after the
          Notice is received, any party may commence an arbitration proceeding.
          A form for initiating arbitration proceedings is available on the
          AAA's site at www.adr.org. In addition to filing this form with the
          AAA in accordance with its rules and procedures, you may send a copy
          to Hyena Auction at disputes@hyenaauction.com. Any settlement offer
          made by a party, if any, shall not be disclosed to the arbitrator. 4.4
          The arbitration hearing shall be held in the county in which the
          initiating party resides or at another mutually agreed location. If
          the value of the relief sought is $10,000 or less, any party may elect
          to have the arbitration conducted by telephone or based solely on
          written submissions, which election shall be binding on the parties
          subject to the arbitrator's discretion to require an in-person
          hearing, if the circumstances warrant. In cases where an in-person
          hearing is held, you may attend by telephone, unless the arbitrator
          requires otherwise. 4.5 The arbitrator will decide the substance of
          all claims in accordance with applicable law, including recognized
          principles of equity, and will honor all claims of privilege
          recognized by law. The arbitrator shall not be bound by rulings in
          prior arbitrations involving different parties. The arbitrator's award
          shall be final and binding and judgment on the award rendered by the
          arbitrator may be entered in any court having jurisdiction thereof.
          4.6 Payment of all filing, administration and arbitrator fees will be
          governed by the AAA's rules, unless otherwise stated in this Agreement
          to Arbitrate. 4.7 If an arbitrator or court decides that any part of
          this ADR Policy is invalid or unenforceable, the other parts of this
          ADR Policy shall still apply.
        </p>

        <h5 style={{ marginBottom: "15px" }}>
          5. Future Amendments to the ADR Policy.
        </h5>
        <p style={{ marginBottom: "10px" }}>
          Hyena Auction may amend this ADR Policy in its sole discretion;
          however, you and Hyena Auction agree that if Hyena Auction makes any
          amendment to this ADR Policy (other than an amendment to any notice
          address or site link provided herein) in the future, that amendment
          shall not apply to any claim that was filed in a legal proceeding
          prior to the effective date of the amendment. The amendment shall
          apply to all other disputes or claims governed by the ADR Policy that
          have arisen or may arise between Buyers and Sellers. Hyena Auction
          will notify you of amendments to this ADR Policy by posting the
          amended terms on www.hyenaauction.com at least thirty (30) days before
          the effective date of the amendments and by providing notice your
          registered email account. If you do not agree to these amended terms,
          you may close your account within the thirty (30) day period and you
          will not be bound by the amended terms.
        </p>

        <h5 style={{ marginBottom: "15px" }}>6. Indemnity.</h5>
        <p style={{ marginBottom: "150px" }}>
          You will indemnify and hold Hyena Auction (including Hyena Auction ’s
          affiliates and subsidiaries, as well as their respective officers,
          directors, employees, agents) harmless from any claim or demand,
          including reasonable legal fees, made by any third party due to or
          arising out of your breach of this ADR Policy, your improper use of
          the Hyena Auction Services or your breach of any law or the rights of
          a third party.
        </p>
      </div>
    </div>
  );
};

export default Terms;
