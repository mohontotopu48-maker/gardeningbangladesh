// Data Layer for Event & Ecommerce Tracking (GA4, GTM)
// Usage: import { track } from "@/lib/tracking"; track.event("...", {...});

type EventData = Record<string, any>;

declare global {
  interface Window {
    dataLayer: any[];
  }
}

function push(data: EventData) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(data);
    // Also log in development
    if (process.env.NODE_ENV !== "production") {
      console.log("[TRACK]", data);
    }
  }
}

export const track = {
  // Page view tracking
  pageView(url: string, title?: string) {
    push({
      event: "page_view",
      page_path: url,
      page_title: title,
    });
  },

  // View item (product detail)
  viewItem(product: { id: number; name: string; price: number; categoryId: number }) {
    push({
      event: "view_item",
      ecommerce: {
        items: [
          {
            item_id: `GB-${product.id}`,
            item_name: product.name,
            price: product.price,
            item_category: `cat-${product.categoryId}`,
            quantity: 1,
          },
        ],
      },
    });
  },

  // Add to cart
  addToCart(product: { id: number; name: string; price: number; quantity: number }) {
    push({
      event: "add_to_cart",
      ecommerce: {
        items: [
          {
            item_id: `GB-${product.id}`,
            item_name: product.name,
            price: product.price,
            quantity: product.quantity,
          },
        ],
      },
    });
  },

  // Remove from cart
  removeFromCart(product: { id: number; name: string; price: number; quantity: number }) {
    push({
      event: "remove_from_cart",
      ecommerce: {
        items: [
          {
            item_id: `GB-${product.id}`,
            item_name: product.name,
            price: product.price,
            quantity: product.quantity,
          },
        ],
      },
    });
  },

  // Begin checkout
  beginCart(items: Array<{ id: number; name: string; price: number; quantity: number }>, total: number) {
    push({
      event: "begin_checkout",
      ecommerce: {
        value: total,
        items: items.map((item) => ({
          item_id: `GB-${item.id}`,
          item_name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
      },
    });
  },

  // Purchase complete
  purchase(orderNumber: string, items: Array<{ id: number; name: string; price: number; quantity: number }>, total: number) {
    push({
      event: "purchase",
      ecommerce: {
        transaction_id: orderNumber,
        value: total,
        items: items.map((item) => ({
          item_id: `GB-${item.id}`,
          item_name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
      },
    });
  },

  // Search
  search(query: string) {
    push({
      event: "search",
      search_term: query,
    });
  },

  // Custom event
  event(name: string, data: EventData = {}) {
    push({ event: name, ...data });
  },

  // Membership signup
  membershipSignup(plan: string, amount: number) {
    push({
      event: "membership_signup",
      plan,
      value: amount,
    });
  },
};
