import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Star, ThumbsUp, MessageCircle, Award, TrendingUp } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

export function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      avatar: "https://ui-avatars.com/api/?name=Nguyen+Van+A&background=3b82f6&color=fff",
      rating: 5,
      date: "05/01/2026",
      comment: "Dịch vụ tuyệt vời! Nhân viên tư vấn nhiệt tình, chuyến đi Nha Trang rất trọn vẹn. Khách sạn đẹp, tour guide chuyên nghiệp. Chắc chắn sẽ quay lại!",
      trip: "Tour Nha Trang 3N2Đ",
      images: [
        "https://images.unsplash.com/photo-1558117338-aa433feb1c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcmVzb3J0fGVufDF8fHx8MTc2Nzg0OTEyN3ww&ixlib=rb-4.1.0&q=80&w=400",
      ],
    },
    {
      id: 2,
      name: "Trần Thị B",
      avatar: "https://ui-avatars.com/api/?name=Tran+Thi+B&background=ec4899&color=fff",
      rating: 5,
      date: "03/01/2026",
      comment: "Lần đầu đi Sapa với Karnel, mọi thứ đều hoàn hảo từ A-Z. Homestay view đẹp, ăn uống ngon, hướng dẫn viên thân thiện. Giá cả hợp lý, đáng đồng tiền!",
      trip: "Tour Sapa 2N1Đ",
      images: [
        "https://images.unsplash.com/photo-1767697358940-bca3a4cb76bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBkZXN0aW5hdGlvbiUyMG1vdW50YWlufGVufDF8fHx8MTc2Nzg3MzczNnww&ixlib=rb-4.1.0&q=80&w=400",
      ],
    },
    {
      id: 3,
      name: "Lê Văn C",
      avatar: "https://ui-avatars.com/api/?name=Le+Van+C&background=10b981&color=fff",
      rating: 4,
      date: "01/01/2026",
      comment: "Chuyến đi Phú Quốc rất tuyệt. Khách sạn đẹp, dịch vụ tốt. Chỉ có điều lịch trình hơi gấp. Nhưng nhìn chung vẫn hài lòng và sẽ giới thiệu bạn bè.",
      trip: "Tour Phú Quốc 4N3Đ",
      images: [],
    },
    {
      id: 4,
      name: "Phạm Thị D",
      avatar: "https://ui-avatars.com/api/?name=Pham+Thi+D&background=f59e0b&color=fff",
      rating: 5,
      date: "28/12/2025",
      comment: "Đặt phòng qua Karnel rất nhanh và tiện lợi. Giá tốt hơn đặt trực tiếp, còn được tư vấn nhiệt tình. Chắc chắn sẽ ủng hộ lâu dài!",
      trip: "Đặt khách sạn Đà Nẵng",
      images: [
        "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc2NzgzMzg0Nnww&ixlib=rb-4.1.0&q=80&w=400",
      ],
    },
  ];

  const stats = [
    { icon: <ThumbsUp className="w-8 h-8" />, value: "98%", label: "Khách hàng hài lòng" },
    { icon: <MessageCircle className="w-8 h-8" />, value: "5,234", label: "Đánh giá tích cực" },
    { icon: <Award className="w-8 h-8" />, value: "4.9/5", label: "Điểm trung bình" },
    { icon: <TrendingUp className="w-8 h-8" />, value: "12K+", label: "Lượt đánh giá" },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Đánh giá & Phản hồi
          </h1>
          <p className="text-gray-600 text-lg">
            Ý kiến của bạn giúp chúng tôi hoàn thiện dịch vụ tốt hơn
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl mb-2">{stat.value}</div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Feedback Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="shadow-2xl">
              <CardContent className="p-8">
                <h2 className="text-3xl mb-6 flex items-center gap-3">
                  <Star className="w-8 h-8 text-yellow-500 fill-current" />
                  Gửi đánh giá của bạn
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Họ và tên *</Label>
                      <Input id="name" placeholder="Nguyễn Văn A" required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="example@email.com" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="booking-code">Mã đặt phòng/tour</Label>
                    <Input id="booking-code" placeholder="VD: BK12345" />
                  </div>

                  <div>
                    <Label>Đánh giá của bạn *</Label>
                    <div className="flex gap-2 my-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <motion.button
                          key={star}
                          type="button"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoveredRating(star)}
                          onMouseLeave={() => setHoveredRating(0)}
                          className="focus:outline-none"
                        >
                          <Star
                            className={`w-10 h-10 transition-colors ${
                              star <= (hoveredRating || rating)
                                ? "text-yellow-500 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        </motion.button>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500">
                      {rating === 0 && "Chọn số sao để đánh giá"}
                      {rating === 1 && "Rất không hài lòng"}
                      {rating === 2 && "Không hài lòng"}
                      {rating === 3 && "Bình thường"}
                      {rating === 4 && "Hài lòng"}
                      {rating === 5 && "Rất hài lòng"}
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="title">Tiêu đề đánh giá *</Label>
                    <Input id="title" placeholder="Chuyến đi tuyệt vời!" required />
                  </div>

                  <div>
                    <Label htmlFor="comment">Nội dung đánh giá *</Label>
                    <Textarea
                      id="comment"
                      placeholder="Chia sẻ trải nghiệm của bạn với chúng tôi..."
                      rows={6}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="images">Thêm hình ảnh (tùy chọn)</Label>
                    <Input id="images" type="file" multiple accept="image/*" />
                    <p className="text-xs text-gray-500 mt-1">Tối đa 5 ảnh, mỗi ảnh không quá 5MB</p>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-6"
                    >
                      <Star className="w-5 h-5 mr-2" />
                      Gửi đánh giá
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Why Feedback Matters */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4">Tại sao nên để lại đánh giá?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 p-2 rounded-lg mt-1">
                      <ThumbsUp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg mb-1">Giúp cải thiện dịch vụ</h4>
                      <p className="text-blue-100">Ý kiến của bạn giúp chúng tôi nâng cao chất lượng phục vụ</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 p-2 rounded-lg mt-1">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg mb-1">Nhận ưu đãi đặc biệt</h4>
                      <p className="text-blue-100">Mỗi đánh giá hợp lệ được tặng 50 điểm thưởng</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 p-2 rounded-lg mt-1">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg mb-1">Chia sẻ trải nghiệm</h4>
                      <p className="text-blue-100">Giúp du khách khác có những lựa chọn tốt hơn</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4">Cam kết của chúng tôi</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <p className="text-gray-700">Phản hồi mọi đánh giá trong 24h</p>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <p className="text-gray-700">Bảo mật thông tin khách hàng tuyệt đối</p>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <p className="text-gray-700">Cải thiện dựa trên phản hồi thực tế</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Recent Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl mb-8 text-center">Đánh giá gần đây</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full"
                      />
                      <div className="flex-1">
                        <h4 className="text-lg mb-1">{testimonial.name}</h4>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < testimonial.rating
                                    ? "text-yellow-500 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">{testimonial.date}</span>
                        </div>
                        <span className="inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                          {testimonial.trip}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{testimonial.comment}</p>
                    {testimonial.images.length > 0 && (
                      <div className="flex gap-2">
                        {testimonial.images.map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            alt="Review"
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white shadow-2xl">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl mb-4">Cảm ơn bạn đã tin tưởng Karnel Travel!</h3>
              <p className="text-xl mb-6 text-white/90">
                Mỗi đánh giá của bạn đều rất quý giá với chúng tôi
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary">
                  Xem thêm đánh giá
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-purple-600">
                  Chia sẻ trên Facebook
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
