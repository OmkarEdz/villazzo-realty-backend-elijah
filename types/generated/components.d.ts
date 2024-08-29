import type { Schema, Attribute } from '@strapi/strapi';

export interface CopyrightLinksCopyrightLinks extends Schema.Component {
  collectionName: 'components_copyright_links_copyright_links';
  info: {
    displayName: 'copyrightLinks';
  };
  attributes: {
    Label: Attribute.String;
    URL: Attribute.String;
  };
}

export interface FeaturedImagesFeaturedImages extends Schema.Component {
  collectionName: 'components_featured_images_featured_images';
  info: {
    displayName: 'Featured Images';
    description: '';
  };
  attributes: {
    URL: Attribute.String;
    Hero: Attribute.Media;
    Logo: Attribute.Media;
  };
}

export interface FeaturedImagesTeamMember extends Schema.Component {
  collectionName: 'components_featured_images_team_members';
  info: {
    displayName: 'Team Member';
    description: '';
  };
  attributes: {};
}

export interface FeaturedPopFeaturedProperties extends Schema.Component {
  collectionName: 'components_featured_pop_featured_properties';
  info: {
    displayName: 'Featured Properties';
    description: '';
  };
  attributes: {
    heading: Attribute.Text;
    propertyImageURL: Attribute.String;
    subheading: Attribute.RichText;
    OnHoverContent: Attribute.String;
    OnHoverDate: Attribute.String;
  };
}

export interface FooterLinksNavigateLinksLeft extends Schema.Component {
  collectionName: 'components_footer_links_navigate_links_lefts';
  info: {
    displayName: 'navigateLinksLeft';
  };
  attributes: {
    Label: Attribute.String;
    URL: Attribute.String;
  };
}

export interface FooterLinksNavigateLinksRight extends Schema.Component {
  collectionName: 'components_footer_links_navigate_links_rights';
  info: {
    displayName: 'navigateLinksRight';
  };
  attributes: {
    Label: Attribute.String;
    URL: Attribute.String;
  };
}

export interface NewDevelopmentPageNewDevelopment extends Schema.Component {
  collectionName: 'components_new_development_page_new_developments';
  info: {
    displayName: 'New Development';
    description: '';
  };
  attributes: {
    propertyName: Attribute.String;
    propertyLocation: Attribute.String &
      Attribute.DefaultTo<'Property Location'>;
    propertyImageURL: Attribute.String;
  };
}

export interface OurListingOurListing extends Schema.Component {
  collectionName: 'components_our_listing_our_listings';
  info: {
    displayName: 'Our Listing';
    description: '';
  };
  attributes: {
    PropertyName: Attribute.String;
    PropertyImg: Attribute.String;
    PropertyDesc: Attribute.String;
    PropertyPageLink: Attribute.String;
  };
}

export interface OurSitesOurSites extends Schema.Component {
  collectionName: 'components_our_sites_our_sites';
  info: {
    displayName: 'Our Sites';
    description: '';
  };
  attributes: {
    SiteLink: Attribute.String;
    SiteImageURL1: Attribute.String;
  };
}

export interface PropertyDetailsPropertyDetails extends Schema.Component {
  collectionName: 'components_property_details_property_details';
  info: {
    displayName: 'PropertyDetails';
  };
  attributes: {
    PropertyLoc: Attribute.String;
    Bedrooms: Attribute.String;
    Bathrooms: Attribute.String;
    Price: Attribute.String;
    Description: Attribute.String;
    MemberName: Attribute.String;
    MemberImgUrl: Attribute.String;
    MemberDes: Attribute.String;
    MemberPhone: Attribute.String;
    MemberEmail: Attribute.String;
    MemberLink: Attribute.String;
  };
}

export interface PropertyImgsPropertyImgs extends Schema.Component {
  collectionName: 'components_property_imgs_property_imgs';
  info: {
    displayName: 'PropertyImgs';
  };
  attributes: {
    ImgUrl: Attribute.String;
  };
}

export interface RecentSalesRecentSales extends Schema.Component {
  collectionName: 'components_recent_sales_recent_sales';
  info: {
    displayName: 'Recent Sales';
    description: '';
  };
  attributes: {
    PropertyName: Attribute.String;
    PropertyLocation: Attribute.RichText;
    PropertyImg: Attribute.String;
    OnHoverPrice: Attribute.String;
  };
}

export interface ReviewsReviews extends Schema.Component {
  collectionName: 'components_reviews_reviews';
  info: {
    displayName: 'Reviews';
    description: '';
  };
  attributes: {
    Content: Attribute.Text;
    Reviewer: Attribute.String;
    Location: Attribute.String;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_decoration_heroes';
  info: {
    name: 'Hero';
    icon: 'address-card';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
  };
}

export interface SharedHeaderNavigation extends Schema.Component {
  collectionName: 'components_shared_header_navigations';
  info: {
    displayName: 'headerNavigation';
    description: '';
  };
  attributes: {
    Label: Attribute.String;
    URL: Attribute.String;
    showIcon: Attribute.Enumeration<['No', 'Yes']>;
  };
}

export interface SharedHomePageLinks extends Schema.Component {
  collectionName: 'components_shared_home_page_links';
  info: {
    displayName: 'homePageLinks';
  };
  attributes: {
    Label: Attribute.String;
    URL: Attribute.String;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedSubMenu extends Schema.Component {
  collectionName: 'components_shared_sub_menus';
  info: {
    displayName: 'subMenu';
  };
  attributes: {
    Label: Attribute.String;
    URL: Attribute.String;
  };
}

export interface SingleMemberSingleMember extends Schema.Component {
  collectionName: 'components_single_member_single_members';
  info: {
    displayName: 'Single Member';
  };
  attributes: {
    memberName: Attribute.String;
    memberImageURL: Attribute.String;
    memberType: Attribute.String;
    contactNo: Attribute.String;
    memberEmail: Attribute.String;
  };
}

export interface SocialSocialConnect extends Schema.Component {
  collectionName: 'components_social_social_connects';
  info: {
    displayName: 'socialConnect';
  };
  attributes: {
    Account: Attribute.String;
    URL: Attribute.String;
  };
}

export interface SoldSoldProperties extends Schema.Component {
  collectionName: 'components_sold_sold_properties';
  info: {
    displayName: 'Sold Properties';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    propertyImageURL: Attribute.String;
    subheading: Attribute.RichText;
  };
}

export interface TeamMembersTeamMembers extends Schema.Component {
  collectionName: 'components_team_members_team_members';
  info: {
    displayName: 'Member';
    description: '';
  };
  attributes: {
    memberName: Attribute.String;
    memberType: Attribute.String;
    contactNo: Attribute.String;
    memberEmail: Attribute.Email;
    memberImageURL: Attribute.String;
    pagelink: Attribute.String;
  };
}

export interface TopDealsTopDeals extends Schema.Component {
  collectionName: 'components_top_deals_top_deals';
  info: {
    displayName: 'TopDeals';
    description: '';
  };
  attributes: {
    PropertyName: Attribute.String;
    MainPrice: Attribute.String;
    DiscountedPrice: Attribute.String;
    ButtonLink: Attribute.String;
    PropertyImg: Attribute.String;
  };
}

export interface VideosVideos extends Schema.Component {
  collectionName: 'components_videos_videos';
  info: {
    displayName: 'Videos';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    subheading: Attribute.String;
    youtubeEmebedURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'copyright-links.copyright-links': CopyrightLinksCopyrightLinks;
      'featured-images.featured-images': FeaturedImagesFeaturedImages;
      'featured-images.team-member': FeaturedImagesTeamMember;
      'featured-pop.featured-properties': FeaturedPopFeaturedProperties;
      'footer-links.navigate-links-left': FooterLinksNavigateLinksLeft;
      'footer-links.navigate-links-right': FooterLinksNavigateLinksRight;
      'new-development-page.new-development': NewDevelopmentPageNewDevelopment;
      'our-listing.our-listing': OurListingOurListing;
      'our-sites.our-sites': OurSitesOurSites;
      'property-details.property-details': PropertyDetailsPropertyDetails;
      'property-imgs.property-imgs': PropertyImgsPropertyImgs;
      'recent-sales.recent-sales': RecentSalesRecentSales;
      'reviews.reviews': ReviewsReviews;
      'sections.hero': SectionsHero;
      'shared.header-navigation': SharedHeaderNavigation;
      'shared.home-page-links': SharedHomePageLinks;
      'shared.seo': SharedSeo;
      'shared.sub-menu': SharedSubMenu;
      'single-member.single-member': SingleMemberSingleMember;
      'social.social-connect': SocialSocialConnect;
      'sold.sold-properties': SoldSoldProperties;
      'team-members.team-members': TeamMembersTeamMembers;
      'top-deals.top-deals': TopDealsTopDeals;
      'videos.videos': VideosVideos;
    }
  }
}
