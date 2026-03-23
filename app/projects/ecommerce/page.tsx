"use client";

import { useState } from "react";
import { ShoppingCart, Search, Star, X, Plus, Minus, Heart, ChevronRight, Package, Truck, Shield } from "lucide-react";

const categories = ["All", "Electronics", "Gadgets", "Books", "Accessories"];

const products = [
  { id: 1, name: "Wireless Mechanical Keyboard", price: 899000, originalPrice: 1199000, category: "Electronics", rating: 4.8, reviews: 234, badge: "Best Seller", color: "bg-slate-800", emoji: "⌨️" },
  { id: 2, name: "Smart Watch Pro X", price: 2499000, originalPrice: 3199000, category: "Gadgets", rating: 4.9, reviews: 189, badge: "New", color: "bg-blue-900", emoji: "⌚" },
  { id: 3, name: "Clean Code Handbook", price: 189000, originalPrice: 249000, category: "Books", rating: 4.7, reviews: 512, badge: "Popular", color: "bg-emerald-800", emoji: "📘" },
  { id: 4, name: "USB-C Hub 7-in-1", price: 349000, originalPrice: 449000, category: "Accessories", rating: 4.6, reviews: 341, badge: "Sale", color: "bg-slate-700", emoji: "🔌" },
  { id: 5, name: "Noise-Cancelling Headphones", price: 1899000, originalPrice: 2499000, category: "Electronics", rating: 4.8, reviews: 156, badge: "Hot", color: "bg-indigo-900", emoji: "🎧" },
  { id: 6, name: "Portable SSD 1TB", price: 1249000, originalPrice: 1599000, category: "Gadgets", rating: 4.7, reviews: 278, badge: "Sale", color: "bg-cyan-900", emoji: "💾" },
];

type CartItem = { id: number; name: string; price: number; qty: number; emoji: string };

export default function EcommerceApp() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [notification, setNotification] = useState("");

  const filtered = products.filter(
    (p) =>
      (activeCategory === "All" || p.category === activeCategory) &&
      p.name.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (product: typeof products[0]) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === product.id);
      if (existing) {
        return prev.map((c) => c.id === product.id ? { ...c, qty: c.qty + 1 } : c);
      }
      return [...prev, { id: product.id, name: product.name, price: product.price, qty: 1, emoji: product.emoji }];
    });
    setNotification(`${product.emoji} ${product.name} added to cart!`);
    setTimeout(() => setNotification(""), 2500);
  };

  const updateQty = (id: number, delta: number) => {
    setCart((prev) => prev.map((c) => c.id === id ? { ...c, qty: Math.max(0, c.qty + delta) } : c).filter((c) => c.qty > 0));
  };

  const toggleWishlist = (id: number) => {
    setWishlist((prev) => prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]);
  };

  const totalItems = cart.reduce((s, c) => s + c.qty, 0);
  const totalPrice = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const discount = totalPrice * 0.05;

  const fmt = (n: number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Toast */}
      {notification && (
        <div className="fixed top-20 right-4 z-50 bg-slate-900 text-white text-sm px-4 py-3 rounded-xl shadow-xl flex items-center gap-2 animate-fade-in">
          <Package size={14} className="text-blue-400" />
          {notification}
        </div>
      )}

      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 mr-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Package size={16} className="text-white" />
            </div>
            <span className="font-bold text-slate-900 hidden sm:block">HW Store</span>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-lg relative">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-100 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-colors"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={() => setCartOpen(true)}
              className="relative flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              <ShoppingCart size={15} />
              <span className="hidden sm:block">Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* Trust badges */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { icon: Truck, label: "Free Shipping", desc: "Orders over Rp 500K" },
            { icon: Shield, label: "Secure Payment", desc: "100% protected" },
            { icon: Package, label: "Easy Returns", desc: "30-day return policy" },
          ].map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl p-3 shadow-sm">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon size={14} className="text-blue-600" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-800">{label}</p>
                <p className="text-[10px] text-slate-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium flex-shrink-0 transition-all ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600"
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto text-xs text-slate-500 flex-shrink-0">{filtered.length} products</span>
        </div>

        {/* Products grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-slate-400">
            <Search size={40} className="mx-auto mb-3 opacity-30" />
            <p>No products found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((product) => {
              const inCart = cart.find((c) => c.id === product.id);
              const inWishlist = wishlist.includes(product.id);
              const discountPct = Math.round((1 - product.price / product.originalPrice) * 100);

              return (
                <div key={product.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group">
                  {/* Product image area */}
                  <div className={`${product.color} h-44 flex items-center justify-center relative overflow-hidden`}>
                    <span className="text-7xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">{product.emoji}</span>
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1">
                      <span className="px-2 py-0.5 bg-blue-600 text-white text-[10px] font-bold rounded-full">{product.badge}</span>
                      <span className="px-2 py-0.5 bg-red-500 text-white text-[10px] font-bold rounded-full">-{discountPct}%</span>
                    </div>
                    {/* Wishlist */}
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
                    >
                      <Heart size={14} className={inWishlist ? "text-red-400 fill-red-400" : "text-white"} />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <span className="text-[10px] text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded-full">
                      {product.category}
                    </span>
                    <h3 className="mt-2 font-bold text-slate-800 text-sm leading-snug">{product.name}</h3>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mt-1.5">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={10} className={i < Math.floor(product.rating) ? "text-amber-400 fill-amber-400" : "text-slate-200 fill-slate-200"} />
                        ))}
                      </div>
                      <span className="text-[10px] text-slate-500">({product.reviews})</span>
                    </div>

                    {/* Price */}
                    <div className="mt-3 flex items-end justify-between">
                      <div>
                        <p className="text-lg font-black text-slate-900">{fmt(product.price)}</p>
                        <p className="text-[10px] text-slate-400 line-through">{fmt(product.originalPrice)}</p>
                      </div>
                    </div>

                    {/* Add to cart */}
                    {inCart ? (
                      <div className="mt-3 flex items-center gap-2">
                        <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-xl px-3 py-2">
                          <button onClick={() => updateQty(product.id, -1)} className="text-blue-600 hover:text-blue-800 transition-colors">
                            <Minus size={13} />
                          </button>
                          <span className="text-sm font-bold text-blue-700 min-w-[20px] text-center">{inCart.qty}</span>
                          <button onClick={() => updateQty(product.id, 1)} className="text-blue-600 hover:text-blue-800 transition-colors">
                            <Plus size={13} />
                          </button>
                        </div>
                        <span className="text-xs text-slate-500">In cart</span>
                      </div>
                    ) : (
                      <button
                        onClick={() => addToCart(product)}
                        className="mt-3 w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2"
                      >
                        <ShoppingCart size={14} />
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Cart Sidebar */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black/40 backdrop-blur-sm" onClick={() => setCartOpen(false)} />
          <div className="w-full max-w-sm bg-white shadow-2xl flex flex-col h-full">
            {/* Cart header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <ShoppingCart size={18} className="text-blue-600" />
                <h2 className="font-bold text-slate-900">Shopping Cart</h2>
                <span className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">{totalItems}</span>
              </div>
              <button onClick={() => setCartOpen(false)} className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors">
                <X size={16} className="text-slate-500" />
              </button>
            </div>

            {/* Cart items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {cart.length === 0 ? (
                <div className="text-center py-12 text-slate-400">
                  <ShoppingCart size={40} className="mx-auto mb-3 opacity-30" />
                  <p className="text-sm">Your cart is empty</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-2xl">{item.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-slate-800 truncate">{item.name}</p>
                      <p className="text-xs text-blue-600 font-bold">{fmt(item.price)}</p>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-lg px-2 py-1">
                      <button onClick={() => updateQty(item.id, -1)} className="text-slate-500 hover:text-red-500 transition-colors">
                        <Minus size={11} />
                      </button>
                      <span className="text-sm font-bold text-slate-800 min-w-[18px] text-center">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, 1)} className="text-slate-500 hover:text-blue-600 transition-colors">
                        <Plus size={11} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Cart footer */}
            {cart.length > 0 && (
              <div className="border-t border-slate-200 p-4 space-y-3">
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal</span>
                    <span>{fmt(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between text-emerald-600">
                    <span>Member Discount (5%)</span>
                    <span>-{fmt(discount)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Shipping</span>
                    <span className="text-emerald-600">Free</span>
                  </div>
                  <div className="flex justify-between font-bold text-slate-900 text-base pt-2 border-t border-slate-100">
                    <span>Total</span>
                    <span>{fmt(totalPrice - discount)}</span>
                  </div>
                </div>
                <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2">
                  Checkout
                  <ChevronRight size={15} />
                </button>
                <button onClick={() => setCartOpen(false)} className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-medium transition-colors">
                  Continue Shopping
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
