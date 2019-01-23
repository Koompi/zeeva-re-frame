(ns zeeva-re-frame.components.content)

(defn section1
    [img title desc]
    [:div {:class "column"}
        [:img {:class "ui medium image" :src img}]
        [:h3.contentTitle title]
        [:p.paraphaDesc desc]])

(defn column
  [desc]
  [:div {:class "column"}
      [:p desc]])

(defn Blurb
    []
    [:div
      [:div.ui.container
          [:div.BlurbPadding
              [:center
                  [:div {:class "ui stackable three column grid"}
                      (section1 "img/blur_1.png" "Community Incentivise Platform Base on Smart Contract" "Community Incentivise Platform Base on Smart Contract Vuthy")
                      (section1 "img/blur_2.png" "Decentralized Internet Sharing" "Community Incentivise Platform Base on Smart Contract Vuthy")
                      (section1 "img/blur_3.png" "ISO Listen and Trading" "Community Incentivise Platform Base on Smart Contract Vuthy")]]]
          [:center
              [:h1.HowItWorks "How it Works"]]

          ; Section 2
          [:div {:class "ui stackable two column grid"}
              [:div {:class "column"}
                  [:img {:class "ui large image" :src "img/img_1.png"}]]
              [:div {:class "column"}
                  [:div.contentCenter
                      [:h4 "What is Decentralization?"]
                      [:p "One of the most exciting aspects of blockchain technology is that it is entirely decentralized, rather than stored in one central point. "]]]]

          ; Section 3
          [:div {:class "ui stackable two column grid"}
              [:div {:class "column"}
                  [:div.contentCenter
                   [:h4 "Is Cloud Storage Decentralized?"]
                   [:p "Decentralization is not to be confused with traditional cloud storage. Data that is stored in the cloud is not stored directly on a device but still kept on one central server elsewhere."]]]
              [:div {:class "column"}
                  [:img {:class "ui large image" :src "img/img_2.png"}]]]]

      ; Section 3
      [:div.sectionBackground
        [:div.container.ui
          [:h4.aboutZeeva "About" [:span [:img.aboutLogo {:src "img/zeeva_Logo.png"}]]]
          [:div {:class "ui stackable three column grid"}
              (column "Decentralization is not to be confused with traditional cloud storage. Data that is stored in the cloud is not stored directly on a device but still kept on one central server elsewhere.")
              (column "Decentralization is not to be confused with traditional cloud storage. Data that is stored in the cloud is not stored directly on a device but still kept on one central server elsewhere.")
              (column "")]

          [:div {:class "ui stackable three column grid"}
              [:div {:class "column"}
                  [:h4.aboutTitle "Vision"]
                  (column "Decentralization is not to be confused with traditional cloud storage. Data that is stored in the cloud is not stored directly on a device but still kept on one central server elsewhere.")]
              [:div {:class "column"}
                [:h4.aboutTitle "Mission"]
                (column "Decentralization is not to be confused with traditional cloud storage. Data that is stored in the cloud is not stored directly on a device but still kept on one central server elsewhere.")]
              [:div {:class "column"}]]]]

      [:div.ui.container
         [:h3.FAQ "FAQ"]  
        [:div {:class "ui styled fluid accordion accordionPadding"}
         [:div {:class "active title"}
          [:i {:class "dropdown icon"}]"What is a dog?"]
         [:div {:class "active content"}
          [:p "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."]]
         [:div {:class "title"}
          [:i {:class "dropdown icon"}]"What kinds of dogs are there?"]
         [:div {:class "content"}
          [:p "There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion."]]
         [:div {:class "title"}
          [:i {:class "dropdown icon"}]"How do you acquire a dog?"]
         [:div {:class "content"}
          [:p "Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters."]
          [:p "A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily."]]]]])
