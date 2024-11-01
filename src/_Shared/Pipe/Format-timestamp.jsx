export function formatTimestamp(timestamp) {
    // Tạo đối tượng Date từ timestamp
    const date = new Date(timestamp*1000);
  
    // Lấy ngày, tháng, và năm
    const day = String(date.getDate()).padStart(2, '0'); // padStart để đảm bảo 2 chữ số
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0, nên cần +1
    const year = date.getFullYear();
  
    // Trả về chuỗi định dạng dd-mm-YYYY
    return `${day}-${month}-${year}`;
  }