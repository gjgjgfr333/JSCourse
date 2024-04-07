import React, { useState } from "react";
import './AvatarStyle.css'

interface AvatarProps {
    onPhotoUpload: (isUploaded: boolean) => void;
}

const AvatarComponent: React.FC<AvatarProps> = ({ onPhotoUpload }) => {
    const [imgAvatar, setImgAvatar] = useState<string | null>(null);
    const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                if (typeof reader.result === 'string') {
                    setImgAvatar(reader.result);
                    localStorage.setItem('photo', reader.result)
                }
            };
            reader.readAsDataURL(file);
            onPhotoUpload(true);
        }
    };

    return (
        <div>
            <input
                type="file"
                name="avatarInput"
                id="avatarInput"
                accept="image/*"
                style={{ position: 'absolute', top: '-300px', width: '200px' }}
                onChange={handlePhotoUpload}
            />
            <div className={'avatar'}>
                <label htmlFor="avatarInput">
                    {imgAvatar && <img src={imgAvatar} alt="Uploaded AvatarComponent" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
                    }
                </label>
            </div>
        </div>
    );
};

export default AvatarComponent;
