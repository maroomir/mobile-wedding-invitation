import os
from PIL import Image

def resize_images(folder_path, target_size, resize_by="width", output_folder="resized_images"):
    """
    Resize images to a specified width or height while maintaining aspect ratio.
    
    Args:
        folder_path (str): Path to the folder containing images.
        target_size (int): Target width or height for resizing.
        resize_by (str): Either "width" or "height" to indicate the resizing dimension.
        output_folder (str): Path to save resized images. Default is 'resized_images'.
    """
    if resize_by not in ("width", "height"):
        raise ValueError("resize_by must be either 'width' or 'height'")

    # Output folder 생성
    os.makedirs(output_folder, exist_ok=True)

    # 이미지 처리
    for filename in os.listdir(folder_path):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            input_path = os.path.join(folder_path, filename)
            output_path = os.path.join(output_folder, filename)

            try:
                with Image.open(input_path) as img:
                    original_width, original_height = img.size

                    # 이미 크기가 target_size 이하인 경우 그대로 저장
                    if (resize_by == "width" and original_width <= target_size) or \
                       (resize_by == "height" and original_height <= target_size):
                        img.save(output_path, quality=95)
                        print(f"Skipped resizing: {filename} (already small enough)")
                        continue

                    # 비율에 맞게 새 크기 계산
                    if resize_by == "width":
                        new_width = target_size
                        new_height = int((target_size / original_width) * original_height)
                    else:
                        new_height = target_size
                        new_width = int((target_size / original_height) * original_width)

                    # 이미지 크기 변경 및 저장
                    resized_img = img.resize((new_width, new_height), Image.LANCZOS)
                    resized_img.save(output_path, quality=95)
                    print(f"Resized {filename} to {new_width}x{new_height} and saved to {output_folder}")

            except Exception as e:
                print(f"Failed to process {filename}: {e}")

# 실행 예시
if __name__ == "__main__":
    # 이미지 폴더와 출력 폴더 경로
    images_folder = "src/assets/images"      # 입력 이미지 폴더
    resized_folder = "src/assets/resized"   # 출력 이미지 폴더

    # 높이나 너비 지정
    target_dimension = 640  # 원하는 크기 (px)
    resize_by = "height"     # "width" 또는 "height" 선택

    resize_images(images_folder, target_dimension, resize_by, resized_folder)
