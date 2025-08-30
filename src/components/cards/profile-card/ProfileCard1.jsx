'use client';
import PropTypes from 'prop-types';

import { useEffect, useRef, useState } from 'react';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

// @project
import { GraphicsCard } from '@/components/cards';

/***************************  PROFILE CARD - 1  ***************************/

export default function ProfileCard1({ name, role, avatar }) {
  const theme = useTheme();
  const refName = useRef(null);
  const refRole = useRef(null);

  const [hoverName, setHoverName] = useState(false);

  // Function to compare the actual width of the name element with its container width
  const compareSizeName = () => {
    const compare = refName.current && refName.current.scrollWidth > refName.current.clientWidth;
    setHoverName(compare);
  };

  useEffect(() => {
    compareSizeName();
    window.addEventListener('resize', compareSizeName);
    window.removeEventListener('resize', compareSizeName);
  }, []);

  const [hoverRole, setHoverRole] = useState(false);

  // Function to compare the actual width of the role element with its container width
  const compareSizeRole = () => {
    const compare = refRole.current && refRole.current.scrollWidth > refRole.current.clientWidth;
    setHoverRole(compare);
  };

  useEffect(() => {
    compareSizeRole();
    window.addEventListener('resize', compareSizeRole);
    window.removeEventListener('resize', compareSizeRole);
  }, []);

  return (
    <GraphicsCard>
      <Stack>
        <GraphicsCard bgImage={avatar} sx={{ height: { xs: 180, sm: 240, md: 300 }, bgcolor: alpha(theme.palette.grey[600], 0.6) }} />
        <Stack sx={{ gap: { xs: 0.25, sm: 0.5 }, padding: { xs: 1.5, sm: 2, md: 3 } }}>
          <Tooltip title={name} disableHoverListener={!hoverName}>
            <Typography ref={refName} variant="h4" noWrap sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
              {name}
            </Typography>
          </Tooltip>
          <Tooltip title={role} disableHoverListener={!hoverRole}>
            <Typography ref={refRole} noWrap sx={{ color: 'text.secondary', textOverflow: 'ellipsis', overflow: 'hidden' }}>
              {role}
            </Typography>
          </Tooltip>
        </Stack>
      </Stack>
    </GraphicsCard>
  );
}

ProfileCard1.propTypes = { name: PropTypes.any, role: PropTypes.any, avatar: PropTypes.any };
