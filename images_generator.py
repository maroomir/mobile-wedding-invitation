import os
from PIL import Image
import re

def natural_sort_key(s):
    """Extract numbers from a string for natural sorting."""
    return [int(text) if text.isdigit() else text.lower() for text in re.split(r'(\d+)', s)]

def generate_typescript_code(image_folder):
    # 이미지 파일 가져오기 및 자연 정렬
    image_files = sorted(
        [f for f in os.listdir(image_folder) if f.endswith(('.png', '.jpg', '.jpeg'))],
        key=natural_sort_key
    )

    imports = []
    images_array = []

    for image_file in image_files:
        file_path = os.path.join(image_folder, image_file)
        alt_name = os.path.splitext(image_file)[0]  # 파일 이름에서 확장자 제거
        variable_name = alt_name.replace('-', '_')  # TS 변수명 형식에 맞게 변경

        # 이미지 크기 읽기
        try:
            with Image.open(file_path) as img:
                width, height = img.size
        except Exception as e:
            print(f"Failed to read image size for {image_file}: {e}")
            width, height = 0, 0

        # import 구문 생성
        imports.append(f"import {variable_name} from '@/assets/images/{image_file}'")

        # images 배열 생성
        images_array.append(f"  {{\n    alt: '{alt_name}',\n    source: {variable_name},\n    width: {width},\n    height: {height}\n  }},")

    # 전체 TypeScript 코드 조합
    imports_code = "\n".join(imports)
    images_code = "\n".join(images_array)

    ts_code = f"""{imports_code}

const images = [
{images_code}
];

export default images;
"""
    return ts_code


# 실행 예시
if __name__ == "__main__":
    image_folder_path = "src/assets/images"  # 이미지 폴더 경로
    output_file = "src/layout/Gallery/Images.ts"   # 출력 파일 이름

    ts_code = generate_typescript_code(image_folder_path)

    # TypeScript 파일로 저장
    with open(output_file, "w", encoding="utf-8") as f:
        f.write(ts_code)

    print(f"TypeScript code has been generated and saved to {output_file}")
