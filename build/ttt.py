import qrcode

# QR 코드 내용 (여기에 원하는 URL 또는 텍스트를 입력하세요)
qr_content = "https://aceevent02.modoo.at/?link=kw7uwxml"

# QR 코드 생성
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=10,
    border=4,
)
qr.add_data(qr_content)
qr.make(fit=True)

# QR 코드 이미지를 파일로 저장
qr_image = qr.make_image(fill_color="black", back_color="white")
qr_image.save("qr_code.png")  # 프로젝트 폴더에 저장
