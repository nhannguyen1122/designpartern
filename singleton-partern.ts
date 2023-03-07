// All implementations of the Singleton have these two steps in common:

// Make the default constructor private, to prevent other objects from using the new operator with the Singleton class.
// Create a static creation method that acts as a constructor. Under the hood, this method calls the private constructor to create an object and saves it in a static field. All following calls to this method return the cached object.
// If your code has access to the Singleton class, then it’s able to call the Singleton’s static method. So whenever that method is called, the same object is always returned.
// Ưu điểm của Singleton
// 3 ưu điểm vượt trội nhất của Singleton chính là những đặc điểm chúng ta đã nhắc lại khác nhiều lần trong bài đó là:

// Bạn có thể chắc chắn rằng mỗi class chỉ có một instance duy nhất.
// Bạn có thể truy cập instance ở bất cứ đâu và bất cứ khi nào
// Singleton chỉ khởi tạo khi bạn gọi chúng lần đầu tiên (gọi khi nào khởi tạo khi ấy).

// Nhược điểm của Singleton
// Tuy nhiên, Singleton cũng có khá nhiều nhược điểm và đặc biệt những nhược điểm này sẽ thể hiện rất rõ, ảnh hưởng lớn nếu như bạn thực hiện một dự án lớn như:

// Vi phạm nguyên tắc Single Responsibility Principle – nguyên tắc đơn nhiệm, một pattern giải quyết cùng lúc 2 vấn đề.
// Mẫu Singleton có thể ẩn đi những thiết kế xấu cho instance khi các component trong chương trình biết rõ về nhau.
// Singleton yêu cầu xử lý đặc biệt trong mộ trường đa luồng, để nhiều luồng không tạo ra một đối tượng Singleton nhiều lần.
// Singleton thường xuyên bị các lập trình viên lâu năm đánh giá là “Evil”, vì Singleton tạo ra quá nhiều phụ thuộc, không thể sử dụng đa hình và dễ tạo ra các bug làm họ phải debug “thâu đêm”.
