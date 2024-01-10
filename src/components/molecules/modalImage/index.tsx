'use client';

import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';
import Image from 'next/image';
import React, { Dispatch, FC, SetStateAction, useState } from 'react';

interface IModalImage {
  isOpen: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  name: string;
  image: string;
}

export const ModalImage: FC<IModalImage> = ({ isOpen, onOpenChange, name, image }) => {
  const [isMouseOnModal, setMouseOnModal] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setMouseOnModal(true);
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{name}</ModalHeader>
            <ModalBody>
              <div className="relative w-full overflow-hidden h-[200px]" onMouseMove={handleMouseMove} onMouseLeave={() => setMouseOnModal(false)}>
                <Image
                  src={image}
                  alt="image alt"
                  fill
                  objectFit="contain"
                  style={{
                    transformOrigin: isMouseOnModal ? `${mousePosition.x}px ${mousePosition.y}px` : 'center',
                    transform: isMouseOnModal ? 'scale(2)' : 'scale(1)',
                  }}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button className="px-4 py-2 h-full bg-gray-500 text-white rounded-[4px]" onPress={onClose}>
                Close
              </Button>
              <Button className="px-4 py-2 h-full bg-red-500 text-white rounded-[4px]" onPress={onClose}>
                SEE MORE
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
