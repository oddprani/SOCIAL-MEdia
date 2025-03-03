
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedRoute from '@/components/AnimatedRoute';
import { ShoppingBag, Heart, Star, Search } from 'lucide-react';

interface ProductCardProps {
  title: string;
  price: string;
  rating: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, rating, image }) => {
  return (
    <motion.div
      className="group relative rounded-xl overflow-hidden shadow-sm"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="aspect-[3/4] bg-gradient-to-tr from-gray-200 to-gray-100"></div>
      <div className="absolute top-3 right-3">
        <button className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center shadow-sm">
          <Heart size={16} className="text-muted-foreground group-hover:text-red-500 transition-colors" />
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center mb-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i} 
              size={12} 
              className={i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
            />
          ))}
        </div>
        <h3 className="font-medium text-sm mb-1 line-clamp-1">{title}</h3>
        <p className="text-sm font-bold">{price}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <button className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-medium flex items-center gap-1.5">
          <ShoppingBag size={12} />
          <span>Add to Cart</span>
        </button>
      </div>
    </motion.div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Carnival: React.FC = () => {
  const categories = [
    "All", "Tech", "Apparel", "Home", "Beauty", "Lifestyle", "Books", "Sports"
  ];

  const products = Array.from({ length: 8 }).map((_, i) => ({
    title: [
      "Minimalist Desk Organizer",
      "Wireless Noise-Cancelling Earbuds",
      "Ultra-Soft Cotton Tee",
      "Smart LED Desk Lamp",
      "Premium Leather Wallet",
      "Stainless Steel Water Bottle",
      "Ergonomic Office Chair",
      "Smart Home Hub"
    ][i],
    price: ["$29.99", "$89.99", "$24.99", "$49.99", "$59.99", "$34.99", "$179.99", "$129.99"][i],
    rating: Math.floor(Math.random() * 2) + 4,
    image: "product-image"
  }));

  return (
    <AnimatedRoute>
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <motion.div 
          className="flex justify-between items-center mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-3xl font-bold">CARNIVAL</h1>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-60 rounded-full py-1.5 pl-9 pr-4 text-sm bg-secondary border-0"
            />
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          </div>
        </motion.div>
        
        <motion.div 
          className="flex gap-4 mb-8 overflow-x-auto py-2 px-1 hide-scrollbar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {categories.map((category, index) => (
            <button 
              key={index}
              className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap ${
                index === 0 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="aspect-[21/9] rounded-xl overflow-hidden bg-gradient-to-tr from-gray-300 to-gray-200 flex items-center justify-center">
            <p className="text-2xl font-medium text-gray-600">Featured Products</p>
          </div>
        </motion.div>
        
        <motion.h2 
          className="text-xl font-medium mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          Trending Now
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {products.map((product, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProductCard {...product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedRoute>
  );
};

export default Carnival;
